import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../common/constants';
import { Folder } from '../common/types';
import { Storage } from '../services/storage';

@Injectable({ providedIn: 'root' })
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  user = this.storage.getUser();

  constructor(private http: HttpClient, private storage: Storage) {}

  folders(): Observable<Folder[]> {
    const url = BASE_URL + `/folders`;
    return this.http.get<Folder[]>(url, this.httpOptions);
  }

  forms(): Observable<any> {
    const url = BASE_URL + `/forms`;
    return this.http.get<any>(url, this.httpOptions);
  }

  compliance(id: number): Observable<any> {
    const url = BASE_URL + `/compliances/${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
