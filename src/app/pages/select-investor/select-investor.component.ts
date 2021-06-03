import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';

import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { LOGO_URL } from '../../common/constants';
import { Compliance, Investor } from '../../common/types';
import { Storage } from '../../services/storage';

@Component({
  selector: 'app-select-investor',
  templateUrl: './select-investor.component.html',
  styleUrls: ['./select-investor.component.scss'],
})
export class SelectInvestorComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;
  formData = {};
  investorList: Investor[] = [];
  investor = {} as Investor;
  compliance = {} as Compliance;
  buttonOptions = {
    useSubmitBehavior: true,
    text: 'Select Investor',
    elementAttr: { class: 'w-100 mt-5' },
  };
  logoUrl = LOGO_URL;
  loading = false;
  message = '';

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private storage: Storage,
    private router: Router
  ) {
    this.storage.setInvestor(null);
  }

  ngOnInit() {
    this.loading = true;
    this.authService.investors().subscribe(
      (res) => {
        this.loading = false;
        this.investorList = res;
        if (res.length === 1) {
          this.investor = res[0];
          this.fetchCompliance();
        }
      },
      (err) => {
        this.loading = false;
        this.message = err.message;
      }
    );
  }

  fetchCompliance() {
    const { complianceId } = this.investor;
    this.loading = true;
    this.dataService.compliance(complianceId).subscribe(
      (res) => {
        this.loading = false;
        this.compliance = res;
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
    this.investor = this.investorList.find(
      (inv) => inv.id === investorId
    ) as Investor;
    this.fetchCompliance();
  }

  onComplianceAgree() {
    this.compliance = {} as Compliance;
    this.storage.setInvestor(this.investor);
    this.router.navigateByUrl('/dashboard');
  }

  onDisagree() {
    this.compliance = {} as Compliance;
    if (this.investorList.length === 1) {
      this.authService.logout();
    }
  }
}
