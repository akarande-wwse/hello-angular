import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../common/types';
import { BASE_URL } from '../common/constants';
import { Storage } from '../common/storage';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage
  ) {}

  login(email: string, password: string): Observable<User[]> {
    const url = BASE_URL + `/users?email=${email}`;
    return this.http.get<User[]>(url, this.httpOptions).pipe(
      tap((resp) => {
        if (resp.length) {
          this.storage.setUser(resp[0]);
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }

  logout(): void {
    this.storage.setUser({} as User);
    this.router.navigate(['/login']);
  }
}
