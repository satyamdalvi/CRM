import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService,) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.getAuthStatus();

    if (isAuthenticated) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }

  getAuthStatus(): any {
    const authStatus = this.cookieService.check("loggedIn");
    return authStatus;
  }
}
