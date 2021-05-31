import {
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Compliance } from '../../common/types';
import { Storage } from '../../services/storage';

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

  constructor(
    private dataService: DataService,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.compliance;
    this.visible = Boolean(currentValue.id);
  }

  onScroll({ target }: Event) {
    if (!this.disableAgree) return;
    const { scrollTop, scrollHeight, offsetHeight } = target as HTMLDivElement;
    if (scrollTop === scrollHeight - offsetHeight) {
      this.disableAgree = false;
    }
  }
}
