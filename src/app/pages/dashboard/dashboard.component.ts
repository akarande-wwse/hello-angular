import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../../services/data.service';
import { Document, Folder, Group, Hierarchy } from '../../common/types';
import { WireInstructionsComponent } from '../wire-instructions/wire-instructions.component';
import { FORMS } from '../../services/in-memory-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groups: Group[] = [];
  hierarchy: Hierarchy = [];
  folder = {} as Folder;
  documents: Document[] = [];

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.groups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  onDocSelect(hierarchy: Hierarchy) {
    this.hierarchy = hierarchy;
    this.folder = hierarchy.slice(-1)[0] as Folder;
  }

  handleDocOpen(doc: Document) {
    if (doc.type === 'form') {
      const dialogRef = this.dialog.open(WireInstructionsComponent, {
        width: '600px',
        data: FORMS,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  }
}
