import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFileManagerModule,
} from 'devextreme-angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HeaderComponent } from '../components/header/header.component';

const components = [HeaderComponent];
const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFileManagerModule,
  PdfViewerModule,
];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
