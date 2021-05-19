import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-wire-instructions',
  templateUrl: './wire-instructions.component.html',
  styleUrls: ['./wire-instructions.component.scss'],
})
export class WireInstructionsComponent implements OnInit {
  generalForm = this.formBuilder.group({
    bankName: new FormControl('', [Validators.required]),
    accountName: new FormControl('', [Validators.required]),
    accountNumber: new FormControl('', [Validators.required]),
  });
  taxInfoForm = this.formBuilder.group({
    bankName: new FormControl('', [Validators.required]),
    accountName: new FormControl('', [Validators.required]),
    accountNumber: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<WireInstructionsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    if (data.userid) {
      this.generalForm.setValue(this.data.general);
      this.taxInfoForm.setValue(this.data.taxInfo);
    }
  }

  ngOnInit(): void {}

  handleSave(tabGroup: MatTabGroup) {
    const forms = [this.generalForm, this.taxInfoForm];
    for (let i = 0; i < forms.length; i++) {
      if (!forms[i].valid) {
        tabGroup.selectedIndex = i;
        forms[i].markAllAsTouched();
        return;
      }
    }
    const payload = {
      general: this.generalForm.value,
      taxInfo: this.taxInfoForm.value,
      userid: this.data.userid,
    };
    const service = payload.userid
      ? this.dataService.updateWireInstructions(payload)
      : this.dataService.createWireInstructions(payload);

    service.subscribe((resp) => {
      if (!resp.status) {
        this.snackBar.open(resp.message, '', { duration: 2000 });
      } else {
        this.dialogRef.close();
        this.snackBar.open(resp.message, '', { duration: 2000 });
      }
    });
  }
}
