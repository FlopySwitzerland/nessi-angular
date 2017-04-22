/**
 * Created by rgabriel on 08.03.2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import {AuthenticationService} from "../services/authentication.service";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  jwtHelper: JwtHelper = new JwtHelper();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.auth.loggedIn());
    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }

}
