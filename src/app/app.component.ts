import { User } from './models/user.model';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'Gamba';
  user!: User;
  userSubscription: Subscription = new Subscription();
  constructor(private authService: AuthService, private router: Router) {
    this.userSubscription = this.authService.user.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    if(this.user.username == undefined){
      this.authService.logout();
    }
  }
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
