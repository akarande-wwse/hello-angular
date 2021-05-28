import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFileManagerModule,
} from 'devextreme-angular';

import { HeaderComponent } from '../components/header/header.component';

const components = [HeaderComponent];
const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatTreeModule,
  MatIconModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFileManagerModule,
];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
