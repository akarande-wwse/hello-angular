import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User, Group } from '../common/types';
import { BASE_URL } from '../common/constants';
import { GROUPS } from './in-memory-data';

@Injectable({ providedIn: 'root' })
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  groups(): Observable<Group[]> {
    return of(GROUPS);
  }
}
