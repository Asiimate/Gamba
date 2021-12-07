import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser!: User;
  userSubscription!: Subscription;
  constructor(private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(result => this.currentUser = result);
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
  }

}
