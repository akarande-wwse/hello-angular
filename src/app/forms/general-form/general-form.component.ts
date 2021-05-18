import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
})
export class GeneralFormComponent implements OnInit {
  @Input() generalForm: any;

  constructor() {}

  ngOnInit(): void {}
}
