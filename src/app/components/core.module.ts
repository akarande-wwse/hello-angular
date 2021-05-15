import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HeaderComponent } from './header/header.component';

const components = [HeaderComponent];
const modules = [MatButtonModule, MatInputModule, MatCheckboxModule];

@NgModule({
  imports: modules,
  exports: [...modules, ...components],
  declarations: components,
})
export class CoreModule {}
