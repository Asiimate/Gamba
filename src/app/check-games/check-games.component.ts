import { Tip } from './../models/tip.model';
import { LottoService } from './../lotto.service';
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
  subscription!: Subscription;
  allTips!: Tip[];
  constructor(private authService: AuthService, private lottoService: LottoService) {
    this.subscription = this.authService.user.subscribe(res => this.user = res);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.lottoService.getUserTips(this.user.username).subscribe(result => {
      if(!result) return
      this.allTips = result.reverse();
    });
  }

}
