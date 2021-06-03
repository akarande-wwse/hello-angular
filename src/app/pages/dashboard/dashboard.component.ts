import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Folder, File, Compliance } from '../../common/types';
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
  files: File[] = [];
  fileToOpen = {} as File;
  isFileOpened = false;
  loading = false;
  compliance = {} as Compliance;
  showEmailPopup = false;

  onFileBack = () => {
    this.isFileOpened = false;
    this.fileToOpen = {} as File;
  };
  onEmailClick = () => {
    this.showEmailPopup = true;
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
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

  customizeColumns(columns: any) {
    columns[2].width = '25%'; // date column
    columns[3].alignment = 'left'; // size column
    return columns;
  }

  handleFolderChange(event: any) {
    console.log(event);
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

  onDisagree() {
    this.compliance = {} as Compliance;
  }
}
