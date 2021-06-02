import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import { AuthService } from '../../services/auth.service';
import { LOGO_URL } from '../../common/constants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
  formData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  email = 'jsmith@abc-capital.com';
  logoUrl = LOGO_URL;
  loading = false;
  message = '';

  passwordComparison = () => {
    return this.form.formData.newPassword;
  };

  constructor() {}

  ngOnInit(): void {}

  changePassword() {
    this.form.instance.validate();
  }

  closePopup() {
    this.visibleChange.emit(false);
  }
}
