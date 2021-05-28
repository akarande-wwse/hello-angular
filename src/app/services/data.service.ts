import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../common/constants';
import { Folder } from '../common/types';
import { Storage } from '../common/storage';

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

  formDetails(): Observable<any> {
    const url = BASE_URL + `/wireinstructions?userid=${this.user.id}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  addFormDetails(data: any): Observable<any> {
    const url = BASE_URL + `/wireinstructions`;
    const payload = { ...data, userid: this.user.id };
    return this.http.post<any>(url, payload, this.httpOptions);
  }

  updateFormDetails(data: any): Observable<any> {
    const url = BASE_URL + `/wireinstructions/${data.id}`;
    return this.http.put<any>(url, data, this.httpOptions);
  }
}
