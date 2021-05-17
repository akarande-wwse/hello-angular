import { Component, OnInit } from '@angular/core';

import { User } from './common/types';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {} as User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.subscribe((user: User) => {
      this.user = user;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
