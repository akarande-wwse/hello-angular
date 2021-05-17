import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Document, Folder, Group, Hierarchy } from '../../common/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groups: Group[] = [];
  hierarchy: Hierarchy = [];
  documents: Document[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.groups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  onSelect(hierarchy: Hierarchy) {
    this.hierarchy = hierarchy;
    this.documents = (hierarchy[2] as Folder).documents;
  }
}
