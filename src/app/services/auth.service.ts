import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User, Investor } from '../common/types';
import { BASE_URL } from '../common/constants';
import { Storage } from '../services/storage';

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

  login(username: string, password: string): Observable<User[]> {
    const url = BASE_URL + `/users?username=${username}`;
    return this.http.get<User[]>(url, this.httpOptions).pipe(
      tap((res) => {
        if (res.length) {
          this.storage.setUser(res[0]);
          this.router.navigateByUrl('/select-investor');
        }
      })
    );
  }

  logout(): void {
    this.storage.setUser({} as User);
    this.router.navigate(['/login']);
  }

  investors(): Observable<Investor[]> {
    const user = this.storage.getUser();
    const url = BASE_URL + `/investors?userId=${user.id}`;
    return this.http.get<Investor[]>(url, this.httpOptions);
  }
}
