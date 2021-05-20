import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataService } from '../../services/data.service';
import { Document, Folder, Group, Hierarchy } from '../../common/types';
import { WireInstructionsComponent } from '../wire-instructions/wire-instructions.component';

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
  loading = false;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataService.groupsWithDocuments().subscribe((resp) => {
      this.groups = resp.groups;
      this.loading = false;
    });
  }

  onDocSelect(hierarchy: Hierarchy) {
    this.hierarchy = hierarchy;
    this.folder = hierarchy.slice(-1)[0] as Folder;
  }

  handleDocOpen(doc: Document) {
    if (doc.type === 'form') {
      this.loading = true;
      this.dataService.wireInstructions().subscribe((resp) => {
        if (resp.status) {
          this.dialog.open(WireInstructionsComponent, {
            width: '40%',
            data: resp.data,
          });
        } else {
          this.snackBar.open(resp.message, '', { duration: 2000 });
        }
        this.loading = false;
      });
    }
  }
}
