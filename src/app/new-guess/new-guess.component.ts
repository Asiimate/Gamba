import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { AuthService } from './../auth.service';
import { LottoService } from './../lotto.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-guess',
  templateUrl: './new-guess.component.html',
  styleUrls: ['./new-guess.component.scss']
})
export class NewGuessComponent implements OnInit {

  numbers: number[] = [];
  allNumbers: Number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
  error: string = "";
  userSubscription!: Subscription;
  user!: User;
  constructor(private lottoService: LottoService, private router: Router, private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(res => this.user = res);
  }

  ngOnInit(): void {
  }


  addToTip(num: number) {
    if (!this.numbers.includes(num) && this.numbers.length < 6) {
      this.numbers.push(num)
    }
    else if (this.numbers.includes(num)) {
      const index = this.numbers.indexOf(num);
      if (index > -1) {
        this.numbers.splice(index, 1);
        this.error = "";
      }
    }
    else {
      this.error = "You already selected 6 numbers.";
    }
  }

  makeGuess() {
    this.lottoService.submitGuess(this.numbers);
    this.router.navigate(['']);
  }

  clearGuess() {
    this.numbers = [];
  }
}
