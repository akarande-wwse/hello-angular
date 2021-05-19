import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BASE_URL } from '../common/constants';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  user = this.authService.getUser();

  constructor(private http: HttpClient, private authService: AuthService) {}

  groups() {
    const url = BASE_URL + `/groups`;
    return this.http.get(url, this.httpOptions).pipe(
      map((resp: any) => {
        return {
          groups: resp,
          status: true,
          message: 'Groups with documents',
        };
      }),
      catchError((err) => {
        return of({
          groups: [],
          status: false,
          message: err.message,
        });
      })
    );
  }

  wireInstructions() {
    const url = BASE_URL + `/wireinstructions?userid=${this.user.id}`;
    return this.http.get(url, this.httpOptions).pipe(
      map((resp: any) => {
        return {
          data: resp[0] || {},
          status: true,
          message: 'Wire instructions',
        };
      }),
      catchError((err) => {
        return of({
          data: {},
          status: false,
          message: err.message,
        });
      })
    );
  }

  createWireInstructions(data: any) {
    const url = BASE_URL + `/wireinstructions`;
    const payload = { ...data, userid: this.user.id };
    return this.http.post(url, payload, this.httpOptions).pipe(
      map((resp: any) => {
        return {
          status: true,
          message: 'Wire instructions created',
        };
      }),
      catchError((err) => {
        return of({
          status: false,
          message: err.message,
        });
      })
    );
  }

  updateWireInstructions(data: any) {
    const url = BASE_URL + `/wireinstructions?userid=${data.userid}`;
    return this.http.post(url, data, this.httpOptions).pipe(
      map((resp: any) => {
        return {
          status: true,
          message: 'Wire instructions updated',
        };
      }),
      catchError((err) => {
        return of({
          status: false,
          message: err.message,
        });
      })
    );
  }
}
