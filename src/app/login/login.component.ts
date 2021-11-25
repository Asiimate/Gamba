import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(result => {
      if(!result) return;
      this.router.navigate([''])
    });
    
  }
}
