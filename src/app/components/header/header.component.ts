import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { LOGO_URL } from '../../common/constants';
import { Investor, User } from '../../common/types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  logoUrl = LOGO_URL;
  @Input() user = {} as User;
  investor!: Investor;
  changePassword = false;

  constructor(private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes.user;
    this.investor = currentValue.investor;
  }

  logout() {
    this.authService.logout();
  }
}
