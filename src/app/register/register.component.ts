import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    if(!this.userGroup.valid) return;
    const user = this.userGroup.getRawValue();
    this.authService.register(user).subscribe(result => {
      if(!result) return
      this.router.navigate(['/home'])
    })
  }

  get fullname() {
    return this.userGroup.get('fullname');
  }

  get username() {
    return this.userGroup.get('username');
  }

  get password() {
    return this.userGroup.get('password');
  }
}
