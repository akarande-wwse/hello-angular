import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../components/core.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard, NoAuthGuard } from './auth-guard';

const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [CoreModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [CoreModule, RouterModule],
  declarations: [LoginComponent, DashboardComponent],
  providers: [AuthGuard, NoAuthGuard],
})
export class AppRouterModule {}
