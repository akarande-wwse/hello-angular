import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-email-popup',
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.scss'],
})
export class EmailPopupComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  formData = { subject: '', message: '' };
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendEmail() {
    this.form.instance.validate();
  }

  closePopup() {
    this.visibleChange.emit(false);
    this.form.instance.resetValues();
  }
}
