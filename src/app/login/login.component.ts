import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string = "";
  userGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.error = "";
    var user = this.userGroup.getRawValue();
    this.authService.login(user).subscribe(result => {
      if(!result) return;
      this.router.navigate([''])
    }),catchError(e => this.error = e);
    
  }
}
