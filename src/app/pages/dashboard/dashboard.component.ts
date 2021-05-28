import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
  fileToOpen = {} as File;
  loading = false;
  investor = {} as Investor;
  onChangeInvestor = () => {
    this.router.navigateByUrl('select-investor');
  };

  constructor(
    private dataService: DataService,
    private storage: Storage,
    private router: Router
  ) {}

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

  onFolderClick(event: any) {
    console.log(event);
  }

  handleFileOpen(event: any) {
    const file = event.file.dataItem;
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
      this.fileToOpen = file;
    }
  }
}
