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

  constructor(
    public authservice: AuthService,
    private router: Router,) { }
  
    ngOnInit() {
    this.watchForm();
  } 

  watchForm() {
    setInterval(() => {
      if (this.normalMailBorder == true && this.redMailBorder == false) {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    }, 500);
  }

  async sendMail() {
    try{
      let resp: any = await this.authservice.forgottenPassword(this.email)
      // this.router.navigateByUrl('/login').then(() => {
      //   window.location.reload();
      // });
    } catch(e) {
      console.error(e);
    }
  }

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
