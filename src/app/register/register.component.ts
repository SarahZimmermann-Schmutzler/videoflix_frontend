import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  username = '';
  redMailBorder = false;
  greenMailBorder = false;
  redPwdBorder = false;
  greenPwdBorder = false;
  disabledButton = true;
  sthWrong = false;
  success = false;

  constructor(
    public service: HomeService, 
    public authservice: AuthService,
    private router: Router,) { }


  ngOnInit() {
    this.email = this.service.registerMail;
    this.watchForm();
  }


  watchForm() {
    setInterval(() => {
      if (this.greenMailBorder == true && this.greenPwdBorder == true && this.redMailBorder == false && this.redPwdBorder == false) {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    }, 500);
  }


  // changes border-color from mail/password field in form when they are appropriate
  changeBorderColor(event) {
    if (event.isTrusted == true) {
      this.redMailBorder = true;
      this.redPwdBorder = true;
    }

    if (this.email.includes("@") && this.email.includes(".")) {
      this.redMailBorder = false;
      this.greenMailBorder = true;
    } else {
      this.redMailBorder = true;
      this.greenMailBorder = false;
    }

    if (this.password.length > 7) {
      this.redPwdBorder = false;
      this.greenPwdBorder = true;
    } else {
      this.redPwdBorder = true;
      this.greenPwdBorder = false;
    }
  }


  // registers new user
  async registerUser() {
    let partBeforeAt = this.email.split('@');
    this.username = partBeforeAt[0];
    try{
      let resp: any = await this.authservice.register(this.username, this.password, this.email);
      this.success = true;
    } catch(e) {
      this.sthWrong = true;
    }
  }
}
