import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent {
  @Input() product: any;
  @Output() notify = new EventEmitter();
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
