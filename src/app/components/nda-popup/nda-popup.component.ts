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
  @Output() cancel = new EventEmitter();
  visible = false;
  disableAgree = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
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

  onPrintClick() {
    var printWindow = window.open('', '_blank') as Window;
    printWindow.document.write(
      '<html><head><title>Non-disclosure Agreement/title></head><body>'
    );
    printWindow.document.write(this.compliance.text);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
}
