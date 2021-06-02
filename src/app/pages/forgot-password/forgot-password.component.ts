import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import { AuthService } from '../../services/auth.service';
import { LOGO_URL } from '../../common/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  formData = { username: '' };
  buttonOptions = {
    useSubmitBehavior: true,
    text: 'Reset Password',
    elementAttr: { class: 'w-100 mt-5' },
  };
  logoUrl = LOGO_URL;
  loading = false;
  message = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  resetPassword(event: Event): void {
    event.preventDefault();
    const { username } = this.form.formData;
    this.message =
      'If the email you provided is valid in our system, an email will be sent with instructions so you can reset your password.';
    this.form.instance.resetValues();
  }
}
