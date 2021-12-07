import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { User } from './models/user.model';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API: string = "http://localhost:3000/api/";
  private user$ = new Subject<User>();
  constructor(private http: HttpClient) { }


  get user() {
    return this.user$.asObservable();
  }

  login(user: any) {
    user.password = Md5.hashStr(user.password);
    console.warn('authservice.login', user);
    return this.http.post<User>(`${this.REST_API}users/login`, user).pipe(
      switchMap(
        foundUser => {
          this.setUser(foundUser);
          console.log(`User found`, foundUser);
          return of(foundUser)
        }
      )
    )
  }

  logout() {
    // clean up subject user
    console.warn('authservice.logout');
    this.setUser(null);
  }

  register(user: any){
    //hash User password
    user.password = Md5.hashStr(user.password);
    //make API call to save to database
    this.http.post(`${this.REST_API}users`, user).subscribe(result => {
      if(!result) return;
      this.setUser(user);
      console.warn('authservice.register', user);
    });
    // update the user subject
    return of(user);
  }

  private setUser(user: any){
    this.user$.next(user);
  }
}
