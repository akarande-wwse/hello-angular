import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      timeout(20000),
      catchError((err) => {
        console.log('error caught in intercept', err);
        if (err.error instanceof ErrorEvent) {
          // client-side error
        } else {
          // server-side error
          switch (err.status) {
            case 401:
              this.router.navigateByUrl('/login');
              break;
          }
        }
        return throwError(err);
      })
    );
  }
}
