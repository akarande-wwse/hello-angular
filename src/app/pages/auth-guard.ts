import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true if you want to navigate, otherwise return false
    const user = this.authService.getUser();
    if (!user.id) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true if you want to navigate, otherwise return false
    const user = this.authService.getUser();
    if (user.id) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
