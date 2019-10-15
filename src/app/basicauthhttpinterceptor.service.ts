import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { SigninService } from './signin.service';
@Injectable({
  providedIn: 'root'
})
export class BasicauthhttpinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('token')) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', localStorage.getItem('token'))
      }
      );
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
