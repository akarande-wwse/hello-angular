import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-info-form',
  templateUrl: './tax-info-form.component.html',
  styleUrls: ['./tax-info-form.component.scss'],
})
export class TaxInfoFormComponent implements OnInit {
  @Input() taxInfoForm: any;

  constructor() {}

  ngOnInit(): void {}
}
