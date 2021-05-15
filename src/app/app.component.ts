import { Component, OnInit } from '@angular/core';

import { User } from './common/types';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {} as User;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.subscribeUser((user: User) => {
      this.user = user;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
