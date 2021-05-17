import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Group, Folder, Hierarchy } from '../../common/types';
import df from 'd-forest';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnChanges {
  @Input() data: Group[] = [];
  @Output() select = new EventEmitter();
  treeControl = new NestedTreeControl(
    (node: any) => node.categories || node.folders
  );
  dataSource = new MatTreeNestedDataSource<Group>();
  dataHierarchy: Hierarchy[] = [];

  ngOnChanges({ data }: SimpleChanges) {
    this.dataSource.data = data.currentValue;
    this.dataHierarchy = df(data.currentValue).reduce(
      (acc: any, cur: any) => [...acc, cur],
      []
    );
  }

  hasChild = (_: number, node: any) => {
    if (node.categories) {
      return node.categories.length > 0;
    }
    if (node.folders) {
      return node.folders.length > 0;
    }
    return false;
  };

  onSelect = (node: Folder) => {
    const hierarchy = this.dataHierarchy.find((x) => x[2].id === node.id);
    this.select.emit(hierarchy?.slice(0, -1));
  };
}
