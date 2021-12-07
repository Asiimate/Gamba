import { User } from './../models/user.model';
import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-games',
  templateUrl: './check-games.component.html',
  styleUrls: ['./check-games.component.scss']
})
export class CheckGamesComponent implements OnInit, OnDestroy {

  user!: User
  userSubscription!: Subscription;
  constructor(private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(res => this.user = res);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
