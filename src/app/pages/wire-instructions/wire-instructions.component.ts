import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    this.generalForm.setValue(this.data.general);
    this.taxInfoForm.setValue(this.data.taxInfo);
  }

  ngOnInit(): void {}

  handleSave() {
    this.dialogRef.close();
  }
}
