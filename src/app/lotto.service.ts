import { Tip } from './models/tip.model';
import { User } from './models/user.model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  REST_API: string = "http://localhost:3000/api/";
  user!: User;
  tip!: Tip;
  userSubscription: Subscription = new Subscription();
  constructor(private http: HttpClient, private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(result => this.user = result);
    
   }

   submitGuess(numbers: number[]){
    //building the tip that will then be submitted
    console.log("this is what lottoservice sees as user", this.user);
    var username = this.user.username;
    var randomDaily = this.getDailyNumber();
    this.tip = {
      username: username,
      numbers: numbers,
      dailynumber: randomDaily
    }
    this.http.post<Tip>(`${this.REST_API}tips`, this.tip).subscribe(result => {
      if(!result) return
    });
   }

   getDailyNumber(){
     return Math.floor(Math.random() * 9) + 1;
   }
}
