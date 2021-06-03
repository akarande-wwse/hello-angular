import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFileManagerModule,
  DxPopupModule,
  DxTextAreaModule,
  DxLoadIndicatorModule,
} from 'devextreme-angular';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { HeaderComponent } from '../components/header/header.component';
import { NDAPopupComponent } from '../components/nda-popup/nda-popup.component';
import { FormPopupComponent } from '../components/form-popup/form-popup.component';
import { EmailPopupComponent } from '../components/email-popup/email-popup.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';

const components = [
  HeaderComponent,
  NDAPopupComponent,
  FormPopupComponent,
  EmailPopupComponent,
  ChangePasswordComponent,
];
const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  RouterModule,
  DxPopupModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxFileManagerModule,
  DxTextAreaModule,
  DxLoadIndicatorModule,
  PdfJsViewerModule,
];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
