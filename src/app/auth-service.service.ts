import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { 
  }

/*   login(email: string, password: string){
    return this.http.post<User>('/api/login', {email, password}).shareReplay()
  } */
}
