import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<User>();
  constructor() { }


  get user() {
    return this.user$.asObservable();
  }

  login(user: any) {
    console.warn('authservice.login', user);
    return of(user);
  }

  logout() {
    // clean up subject user
    console.warn('authservice.logout');
    this.setUser(null);
  }

  register(user: any){
    // make API call to save user to database
    // update the user subject
    this.setUser(user);
    console.warn('authservice.register', user);
    return of(user);
  }

  private setUser(user: any){
    this.user$.next(user);
  }
}
