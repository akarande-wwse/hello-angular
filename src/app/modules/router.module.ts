import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { CoreModule } from './core.module';
import { LoginComponent } from '../pages/login/login.component';
import { SelectInvestorComponent } from '../pages/select-investor/select-investor.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard, NoAuthGuard } from '../services/auth-guard';

const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'select-investor',
    component: SelectInvestorComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [CoreModule, RouterModule.forRoot(routes), NgxDocViewerModule],
  exports: [CoreModule, RouterModule, NgxDocViewerModule],
  declarations: [
    LoginComponent,
    SelectInvestorComponent,
    ForgotPasswordComponent,
    DashboardComponent,
  ],
  providers: [AuthGuard, NoAuthGuard],
})
export class AppRouterModule {}
