import { LottoService } from './../lotto.service';
import { AuthService } from './../auth.service';
import { Draw } from './../models/draw.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-check-draw',
  templateUrl: './check-draw.component.html',
  styleUrls: ['./check-draw.component.scss']
})
export class CheckDrawComponent implements OnInit, OnDestroy {

  user!: User;
  subscription!: Subscription;
  allDraws!: Draw[];
  message: string = "";
  constructor(private authService: AuthService, private lottoService: LottoService) {
    this.subscription = this.authService.user.subscribe(res => this.user = res);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {
    this.subscription = this.lottoService.getDraws().subscribe(result => {
      if(!result) return
      this.allDraws = result.reverse();
    });
  }

  makeDrawFinal(draw: Draw){
    this.lottoService.drawTips(draw);
    this.message = "Successfully drawn!";
  }

}
