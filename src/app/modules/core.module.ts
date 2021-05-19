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

import { HeaderComponent } from '../components/header/header.component';
import { TreeNavComponent } from '../components/tree-nav/tree-nav.component';
import { GeneralFormComponent } from '../forms/general-form/general-form.component';
import { TaxInfoFormComponent } from '../forms/tax-info-form/tax-info-form.component';

const components = [
  HeaderComponent,
  TreeNavComponent,
  GeneralFormComponent,
  TaxInfoFormComponent,
];
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
];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
