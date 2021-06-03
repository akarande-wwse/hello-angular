import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BASE_URL } from '../common/constants';
import { Folder, File, Compliance } from '../common/types';
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

  forms(): Observable<any[]> {
    const url = BASE_URL + `/forms`;
    return this.http.get<any[]>(url, this.httpOptions).pipe(
      map((forms) => {
        return forms.map((form) => ({ ...form, isForm: true }));
      })
    );
  }

  compliance(id: number): Observable<Compliance> {
    const url = BASE_URL + `/compliance/${id}`;
    return this.http.get<Compliance>(url, this.httpOptions);
  }

  formData(formId: number): Observable<any> {
    const url = BASE_URL + `/formData?formId=${formId}`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
