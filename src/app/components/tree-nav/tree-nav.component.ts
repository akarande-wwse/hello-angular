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
import { FORM_TREE } from '../../common/constants';
import df from 'd-forest';

@Component({
  selector: 'app-tree-nav',
  templateUrl: './tree-nav.component.html',
  styleUrls: ['./tree-nav.component.scss'],
})
export class TreeNavComponent implements OnChanges {
  @Input() data: Group[] = [];
  @Output() docSelect = new EventEmitter();
  treeControl = new NestedTreeControl(
    (node: any) => node.categories || node.folders || node.forms
  );
  dataSource = new MatTreeNestedDataSource<Group>();
  dataHierarchy: Hierarchy[] = [];

  ngOnChanges({ data }: SimpleChanges) {
    this.dataSource.data = [...data.currentValue, ...FORM_TREE];
    this.dataHierarchy = df(this.dataSource.data).reduce(
      (acc: any, cur: any) => [...acc, cur],
      []
    );
  }

  hasChild = (_: number, node: any) => {
    return Boolean(node.categories || node.folders || node.forms);
  };

  onSelect = (node: Folder) => {
    const folder = (nodes: Hierarchy) => nodes.slice(-2)[0];
    const hierarchy = this.dataHierarchy.find((x) => folder(x).id === node.id);
    this.docSelect.emit(hierarchy?.slice(0, -1));
  };
}
