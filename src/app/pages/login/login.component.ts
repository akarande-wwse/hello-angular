import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../../services/auth.service';
import { LOGO_URL } from '../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  showPassword = false;
  keepSignedIn = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    public matcher: ErrorStateMatcher
  ) {}

  handleLogin(): void {
    const { email, password } = this.loginForm.value;
    this.loading = true;
    this.authService.login(email, password).subscribe((resp) => {
      if (!resp.status) {
        this.snackBar.open(resp.message, '', { duration: 2000 });
        this.loading = false;
      }
    });
  }
}
