import {
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

import { DataService } from '../../services/data.service';
import { Compliance } from '../../common/types';

@Component({
  selector: 'app-nda-popup',
  templateUrl: './nda-popup.component.html',
  styleUrls: ['./nda-popup.component.scss'],
})
export class NDAPopupComponent implements OnInit {
  @Input() compliance!: Compliance;
  @Output() agree = new EventEmitter();
  visible = false;
  disableAgree = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.compliance;
    this.visible = Boolean(currentValue.id);
    this.disableAgree = true;
  }

  onScroll({ target }: Event) {
    if (!this.disableAgree) return;
    const { scrollTop, scrollHeight, offsetHeight } = target as HTMLDivElement;
    if (scrollTop === scrollHeight - offsetHeight) {
      this.disableAgree = false;
    }
  }
}
