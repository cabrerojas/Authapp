import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
  Router,
   RouterStateSnapshot,
    CanActivate
   } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;


  constructor(private auth: AuthService) {

   // Router

   // CanActivate

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log(route);

    if (this.auth.isAuthenticated()) {
      console.log('Paso el Guard');
      return true;
    } else {
      console.log('Bloqueado por el Guard');
      return false;
    }
  }

}
