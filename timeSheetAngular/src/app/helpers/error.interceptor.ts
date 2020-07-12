import { catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsersService } from '../core/services/users.service';

// https://github.com/cornflourblue/angular-6-registration-login-example-cli

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private service: UsersService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.service.logout();
        location.href = "/";
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}