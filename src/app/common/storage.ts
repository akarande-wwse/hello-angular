import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../common/types';

const user = JSON.parse(localStorage.getItem('user') || '{}');

const userSubject = new BehaviorSubject(user);
const userObservable = userSubject.asObservable();

@Injectable({ providedIn: 'root' })
export class Storage {
  setUser(user: User) {
    userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return userSubject.value;
  }

  subscribeUser(observer: any) {
    userObservable.subscribe(observer);
  }
}
