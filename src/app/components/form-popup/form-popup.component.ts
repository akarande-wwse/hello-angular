import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import { DataService } from 'src/app/services/data.service';
import { File } from 'src/app/common/types';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPopupComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) dxForm!: DxFormComponent;
  @Input() form!: File;
  @Output() save = new EventEmitter();
  formData: any = [];
  visible = false;
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.form;
    this.visible = Boolean(currentValue.id);
    if (this.visible) {
      this.loading = true;
      this.dataService.formData(currentValue.id).subscribe(
        (res) => {
          this.loading = false;
          this.formData = res[0].data;
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }

  handleSave() {
    console.log(this.dxForm.formData);
  }
}
