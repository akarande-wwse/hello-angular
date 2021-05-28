import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import { AuthService } from '../../services/auth.service';
import { LOGO_URL } from '../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild(DxFormComponent, { static: false }) loginForm!: DxFormComponent;
  formData = { username: '', password: '' };
  buttonOptions = {
    useSubmitBehavior: true,
    text: 'Sign in',
    elementAttr: { class: 'w-100 mt-5' },
    type: 'default',
  };
  logoUrl = LOGO_URL;
  showPassword = false;
  loading = false;
  message = '';

  constructor(private authService: AuthService) {}

  handleLogin(event: Event): void {
    event.preventDefault();
    const { username, password } = this.loginForm.formData;
    this.loading = true;
    this.authService.login(username, password).subscribe(
      (res) => {
        this.loading = false;
        if (!res.length) {
          this.message = 'Invalid username or password!';
        }
      },
      (err) => {
        this.loading = false;
        this.message = err.message;
      }
    );
  }
}
