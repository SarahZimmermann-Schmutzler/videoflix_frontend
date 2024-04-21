import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  redMailBorder = false;
  greenMailBorder = false;
  redPwdBorder = false;
  greenPwdBorder = false;
  disabledButton = true;

  constructor(public service: HomeService) { }

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

  registerUser() {
    console.log('email', this.email);
  }

}
