import { Component, Input } from '@angular/core';

import { LOGO_URL } from '../../common/constants';
import { User } from '../../common/types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
  @Input() user = {} as User;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
