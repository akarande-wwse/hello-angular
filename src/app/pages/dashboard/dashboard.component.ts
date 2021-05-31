import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Folder, File, Investor, Compliance } from '../../common/types';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  folders: Folder[] = [];
  files: File[] = [];
  fileToOpen = {} as File;
  isFileOpened = false;
  loading = false;
  compliance = {} as Compliance;
  investor = {} as Investor;
  onChangeInvestor = () => {
    this.router.navigateByUrl('select-investor');
  };
  onFileClose = () => {
    this.isFileOpened = false;
    this.fileToOpen = {} as File;
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
    console.log('folder', event);
  }

  handleFileOpen(event: any) {
    const file: File = event.file.dataItem;
    if (file.isForm) {
      this.loading = true;
    } else {
      this.fileToOpen = file;
      this.loading = true;
      this.dataService.compliance(file.complianceId).subscribe(
        (res) => {
          this.loading = false;
          this.compliance = res;
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }

  onComplianceAgree() {
    this.compliance = {} as Compliance;
    this.isFileOpened = true;
  }
}
