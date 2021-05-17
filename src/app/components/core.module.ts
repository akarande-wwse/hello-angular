import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { TreeComponent } from './tree/tree.component';

const components = [HeaderComponent, TreeComponent];
const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatTreeModule,
  MatIconModule,
];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
