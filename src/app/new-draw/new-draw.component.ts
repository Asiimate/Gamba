import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { LottoService } from './../lotto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-draw',
  templateUrl: './new-draw.component.html',
  styleUrls: ['./new-draw.component.scss']
})
export class NewDrawComponent implements OnInit, OnDestroy {

  user!: User;
  subscription!: Subscription;
  allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
  numbers: number[] = [];
  constructor(private lottoService: LottoService, private authService: AuthService, private router: Router) {
    this.subscription = this.authService.user.subscribe(res => this.user = res);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }

  addToDraw(num: number) {
    if (!this.numbers.includes(num) && this.numbers.length < 6) {
      this.numbers.push(num)
    }
    else if (this.numbers.includes(num)) {
      const index = this.numbers.indexOf(num);
      if (index > -1) {
        this.numbers.splice(index, 1);
      }
    }
  }

  submitDraw() {
    this.lottoService.submitDraw(this.numbers);
    this.router.navigate(['']);
  }

  randomize() {
    while (this.numbers.length < 6) {
      var curr: number = this.randomNumber()
      while (this.numbers.includes(curr)) {
        curr = this.randomNumber();
      }
      this.numbers.push(curr)
    }
  }

  randomNumber() {
    return Math.floor(Math.random() * 49) + 1;
  }
}

