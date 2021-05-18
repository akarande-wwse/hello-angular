import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    // const url = BASE_URL + '/login';
    // return this.http.get<User>(url, {
    //   ...this.httpOptions,
    //   params: { email, password },
    // });
    const fakeUser = { id: 11, name: 'Akshay Karande', email };
    return of(fakeUser).pipe(
      tap((user) => {
        this.setUser(user);
        this.router.navigate(['/dashboard']);
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

  getUser(): User {
    return userSubject.value;
  }

  subscribe(observer: any) {
    userObservable.subscribe(observer);
  }
}
