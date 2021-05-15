import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { User } from '../../common/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user = {} as User;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.dataService.getUser();
    if (!this.user.id) {
      this.router.navigate(['/login']);
    }
  }
}
