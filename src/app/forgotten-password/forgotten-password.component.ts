import { Component } from '@angular/core';

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

  sendMail() {
    console.log('hi')
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
