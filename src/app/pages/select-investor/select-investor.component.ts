import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';

import { AuthService } from '../../services/auth.service';
import { LOGO_URL } from '../../common/constants';
import { Investor } from '../../common/types';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-select-investor',
  templateUrl: './select-investor.component.html',
  styleUrls: ['./select-investor.component.scss'],
})
export class SelectInvestorComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  formData = {};
  investors: Investor[] = [];
  buttonOptions = {
    useSubmitBehavior: true,
    text: 'Select Investor',
    elementAttr: { class: 'w-100 mt-5' },
    type: 'default',
  };
  logoUrl = LOGO_URL;
  loading = false;
  message = '';

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private router: Router
  ) {
    this.storage.setInvestor(null as any);
  }

  ngOnInit() {
    this.authService.investors().subscribe(
      (res) => {
        this.loading = false;
        this.investors = res;
      },
      (err) => {
        this.loading = false;
        this.message = err.message;
      }
    );
  }

  handleSelect(event: Event): void {
    event.preventDefault();
    const { investorId } = this.form.formData;
    const investor = this.investors.find((x) => x.id === investorId);
    this.storage.setInvestor(investor as Investor);
    this.router.navigateByUrl('/dashboard');
  }
}
