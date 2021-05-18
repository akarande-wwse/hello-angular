import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core.module';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { WireInstructionsComponent } from '../pages/wire-instructions/wire-instructions.component';
import { AuthGuard, NoAuthGuard } from '../services/auth-guard';

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
  imports: [CoreModule, RouterModule.forRoot(routes)],
  exports: [CoreModule, RouterModule, WireInstructionsComponent],
  declarations: [LoginComponent, DashboardComponent, WireInstructionsComponent],
  providers: [AuthGuard, NoAuthGuard],
})
export class AppRouterModule {}
