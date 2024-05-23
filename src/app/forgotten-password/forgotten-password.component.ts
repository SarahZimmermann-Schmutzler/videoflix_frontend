import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent {
  email = '';
  redMailBorder = false;
  normalMailBorder = false;
  disabledButton = true;
  sthWrong = false;
  success = false;

  constructor(
    public authservice: AuthService) { }
  
    
    ngOnInit() {
    this.watchForm();
  } 


  // watches form and enables button if form is properly filled out
  watchForm() {
    setInterval(() => {
      if (this.normalMailBorder == true && this.redMailBorder == false) {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    }, 500);
  }


  // sends Mail with Link to reset password site
  async sendMail() {
    try{
      let resp: any = await this.authservice.forgottenPassword(this.email)
      this.success = true;
    } catch(e) {
      this.sthWrong = true;
    }
  }


  // changes border-color from mail field in form when email-adress is appropriate
  changeBorderColorMail(event) {
    if (event.isTrusted == true) {
      this.redMailBorder = true;
    }

    if (this.email.includes("@") && this.email.includes(".")) {
      this.redMailBorder = false;
      this.normalMailBorder = true;
    } else {
      this.redMailBorder = true;
      this.normalMailBorder = false;
    }
  }
}
