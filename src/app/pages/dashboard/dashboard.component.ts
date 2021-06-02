import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Folder, File, Investor, Compliance } from '../../common/types';
import { Storage } from '../../services/storage';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  folders: Folder[] = [];
  fileToOpen = {} as File;
  isFileOpened = false;
  loading = false;
  compliance = {} as Compliance;
  investor = {} as Investor;
  showEmailPopup = false;

  onFileClose = () => {
    this.isFileOpened = false;
    this.fileToOpen = {} as File;
  };
  onEmailClick = () => {
    this.showEmailPopup = true;
  };

  constructor(private dataService: DataService, private storage: Storage) {}

  ngOnInit(): void {
    const user = this.storage.getUser();
    this.investor = user.investor;
    this.loading = true;
    forkJoin(this.dataService.folders(), this.dataService.forms()).subscribe(
      (res) => {
        this.folders = [
          ...res[0],
          { name: 'Forms', items: res[1], isDirectory: true },
        ] as Folder[];
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  handleFolderChange(event: any) {
    console.log('folder', event);
  }

  handleFileOpen(event: any) {
    const file: File = event.file.dataItem;
    this.fileToOpen = { ...file };
    if (!file.isForm) {
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
