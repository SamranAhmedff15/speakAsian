import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router';
import { SigninService } from './signin.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private signin: SigninService, private router: Router) { }
  canActivate(): boolean {
    if (this.signin.isUserLoggedIn() === true) {
      return true;
    } else {
      this.router.navigate(['Signin']);
      return false;
    }
  }
}




