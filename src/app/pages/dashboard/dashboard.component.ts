import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Folder, File, Investor } from '../../common/types';
import { Storage } from '../../common/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  folders: Folder[] = [];
  hierarchy: Folder[] = [];
  selectedFolder = {} as Folder;
  files: File[] = [];
  selectedFile = {} as File;
  loading = false;
  investor = {} as Investor;

  constructor(private dataService: DataService, private storage: Storage) {}

  ngOnInit(): void {
    const user = this.storage.getUser();
    this.investor = user.investor;
    this.loading = true;
    this.dataService.folders().subscribe(
      (res) => {
        this.folders = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  onDocSelect(hierarchy: Folder[]) {
    this.hierarchy = hierarchy;
    this.selectedFolder = hierarchy.slice(-1)[0];
  }

  handleFileOpen(file: File) {
    if (file.isForm) {
      this.loading = true;
      this.dataService.formDetails().subscribe(
        (res) => {
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
    } else {
      this.selectedFile = file;
    }
  }
}
