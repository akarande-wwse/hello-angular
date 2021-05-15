import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../common/types';
import { BASE_URL } from '../common/constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    // const url = BASE_URL + '/login';
    // return this.http.get<User>(url, {
    //   ...this.httpOptions,
    //   params: { email, password },
    // });
    return of({ id: 11, name: 'Akshay Karande', email });
  }
}
