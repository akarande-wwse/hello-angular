import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Investor, User } from '../common/types';

const user = JSON.parse(localStorage.getItem('user') || '{}');

const userSubject = new BehaviorSubject(user);
const userObservable = userSubject.asObservable();

@Injectable({ providedIn: 'root' })
export class Storage {
  setUser(user: User) {
    userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return userSubject.value;
  }

  subscribeUser(observer: any) {
    userObservable.subscribe(observer);
  }

  setInvestor(investor: Investor) {
    this.setUser({ ...this.getUser(), investor });
  }

  getInvestor(): Investor {
    return userSubject.value.investor;
  }
}
