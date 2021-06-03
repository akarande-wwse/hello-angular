import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  USER,
  INVESTORS,
  COMPLIANCE,
  FOLDERS,
  FORM,
  FORM_DATA,
} from './mock-data';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method } = req;
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(handleRoute)).pipe(delay(500));

    function handleRoute() {
      switch (true) {
        case url.includes('/users') && method === 'GET':
          return authenticate();
        case url.includes('/investors') && method === 'GET':
          return ok(INVESTORS);
        case url.includes('/compliance') && method === 'GET':
          return ok(COMPLIANCE);
        case url.includes('/folders') && method === 'GET':
          return ok(FOLDERS);
        case url.includes('/forms') && method === 'GET':
          return ok([FORM]);
        case url.includes('/formData') && method === 'GET':
          return ok([FORM_DATA]);
        default:
          // pass through any requests not handled above
          return next.handle(req);
      }
    }

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function value(key: string) {
      return new URL(url).searchParams.get(key);
    }

    function authenticate() {
      const username = value('username');
      return username === USER.username ? ok([USER]) : ok([]);
    }
  }
}
