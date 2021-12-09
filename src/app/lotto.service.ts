import { Draw } from './models/draw.model';
import { Tip } from './models/tip.model';
import { User } from './models/user.model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  REST_API: string = "http://localhost:3000/api/";
  user!: User;
  tip!: Tip;
  draw!: Draw;
  userSubscription: Subscription = new Subscription();
  drawNums$ = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient, private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(result => this.user = result);

  }

  get drawNums() {
    return this.drawNums$.asObservable();
  }

  submitGuess(numbers: number[]) {
    //building the tip that will then be submitted
    var username = this.user.username;
    var randomDaily = this.getDailyNumber();
    this.tip = {
      username: username,
      numbers: numbers,
      dailynumber: randomDaily
    }
    this.http.post<Tip>(`${this.REST_API}tips`, this.tip).subscribe(result => {
      if (!result) return
    });
  }

  submitDraw(numbers: number[]) {
    var randomDaily = this.getDailyNumber();
    this.draw = {
      numbers: numbers,
      dailynumber: randomDaily
    }
    this.http.post<Draw>(`${this.REST_API}draws`, this.draw).subscribe(result => {
      if (!result) return
    });
  }

  getDailyNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  getUserTips(username: string) {
    return this.http.get<Tip[]>(`${this.REST_API}tips/username/${username}`)
  }

  getUndrawnTips() {
    return this.http.get<Tip[]>(`${this.REST_API}tips/undrawn`)
  }

  getDraws() {
    return this.http.get<Draw[]>(`${this.REST_API}draws`)
  }

  async drawTips(draw: Draw) {
    var winning = {
      winningnumbers: draw.numbers,
      winningdaily: draw.dailynumber
    };
    await this.http.put(`${this.REST_API}tips/draw/lol`, winning).subscribe(result => {
      if (!result) return
    });
    await this.delay(100);
    let undrawn!: Tip[];
    let updates: any[] = [];
    await this.getUndrawnTips().subscribe(result => {
      if (!result) return
      undrawn = result;
      undrawn.forEach(tip => {
        var rightNumbers = 0;
        var rightDaily = 0;
        var update = {
          id: tip._id,
          winningclass: "No win"
        };
        tip.numbers.forEach(num => {
          if (draw.numbers.includes(num)) rightNumbers++
        });
        if (draw.dailynumber == tip.dailynumber) rightDaily++;
        if (rightDaily == 0) {
          switch (rightNumbers) {
            case 3: update.winningclass = "Winningclass 8"
              break;
            case 4: update.winningclass = "Winningclass 6"
              break;
            case 5: update.winningclass = "Winningclass 4"
              break;
            case 6: update.winningclass = "Winningclass 2"
              break;
            default:
              break;
          }
        } else {
          switch (rightNumbers) {
            case 2: update.winningclass = "Winningclass 9"
              break;
            case 3: update.winningclass = "Winningclass 7"
              break;
            case 4: update.winningclass = "Winningclass 5"
              break;
            case 5: update.winningclass = "Winningclass 3"
              break;
            case 6: update.winningclass = "Winninglcass 1"
              break;
            default:
              break;
          }
        }
        rightNumbers = 0;
        rightDaily = 0;
        updates.push(update);
      });
    });
    await this.delay(500);
    updates.forEach(update => {
      var newUpdate = {
        winningclass: update.winningclass,
      }
      this.http.put(`${this.REST_API}tips/${update.id}`, newUpdate).subscribe(result => {
        if (!result) return
      })
    })
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getNumbersOfDraws(): any {
    let allDraws: Draw[] = [];
    this.http.get<Draw[]>(`${this.REST_API}draws`).subscribe(result => {
      if (!result) return;
      allDraws = result;
      let allDrawNumbers: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      allDraws.forEach(draw => {
        draw.numbers.forEach(num => {
          allDrawNumbers[num - 1] = allDrawNumbers[num - 1] + 1;
        });
      });
      console.log("Setting drawNums", allDrawNumbers);
      this.setDrawNums(allDrawNumbers);
      return allDrawNumbers
    });
  }

  setDrawNums(drawNums: any){
    this.drawNums$.next(drawNums);
  }
}
