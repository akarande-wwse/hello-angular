import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { LOGO_URL } from '../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logoUrl = LOGO_URL;
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  showPassword = false;
  keepSignedIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.dataService.getUser();
    if (user.id) {
      this.router.navigate(['/dashboard']);
    }
  }

  handleLogin(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((user) => {
      this.dataService.setUser(user);
      this.router.navigate(['/dashboard']);
    });
  }
}
