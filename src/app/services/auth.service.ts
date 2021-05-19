import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError, delay } from 'rxjs/operators';

import { User } from '../common/types';
import { BASE_URL } from '../common/constants';

const user = JSON.parse(localStorage.getItem('user') || '{}');

const userSubject = new BehaviorSubject(user);
const userObservable = userSubject.asObservable();

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const url = BASE_URL + `/users?email=${email}`;
    return this.http.get(url, this.httpOptions).pipe(
      delay(1000),
      map((resp: any) => {
        if (resp.length) {
          return {
            user: resp[0],
            status: true,
            message: 'Login successful!',
          };
        }
        return {
          status: false,
          message: 'Invalid username or password!',
        };
      }),
      tap((resp: any) => {
        if (resp.status) {
          this.setUser(resp.user);
          this.router.navigate(['/dashboard']);
        }
      }),
      catchError((err) => {
        return of({ status: false, message: err.message });
      })
    );
  }

  logout() {
    this.setUser({} as User);
    this.router.navigate(['/login']);
  }

  setUser(user: User) {
    userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return userSubject.value;
  }

  subscribe(observer: any) {
    userObservable.subscribe(observer);
  }
}
