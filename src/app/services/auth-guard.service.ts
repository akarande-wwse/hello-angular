import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Storage } from '../common/storage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true if you want to navigate, otherwise return false
    const user = this.storage.getUser();
    if (!user.id) {
      this.router.navigate(['/login']);
      return false;
    }
    if (state.url === '/dashboard' && !user.investor) {
      this.router.navigateByUrl('/select-investor');
      return false;
    }
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true if you want to navigate, otherwise return false
    const user = this.storage.getUser();
    if (user.id) {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
    return true;
  }
}
