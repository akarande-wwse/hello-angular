import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LOGO_URL } from '../../common/constants';
import { User } from '../../common/types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoUrl = LOGO_URL;

  constructor(private router: Router, private dataService: DataService) {}

  logout() {
    this.dataService.setUser({} as User);
    this.router.navigate(['/login']);
  }
}
