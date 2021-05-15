import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../components/core.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [CoreModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [CoreModule, RouterModule],
  declarations: [LoginComponent, DashboardComponent],
})
export class AppRouterModule {}
