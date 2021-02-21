// https://github.com/cornflourblue/angular-6-registration-login-example-cli/blob/master/src/app/_helpers/jwt.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let userData = localStorage.getItem('currentUser');

    let currentUser = JSON.parse(userData);
    if (currentUser && currentUser.jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwtToken}`
        }
      });
    }

    return next.handle(request);
  }
}
