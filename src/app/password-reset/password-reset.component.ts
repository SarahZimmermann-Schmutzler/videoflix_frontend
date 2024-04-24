import { Component } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  email = '';
  passwordOne = '';
  passwordTwo = '';
  redPwdTwoBorder = false;
  redPwdOneBorder = false;
  greenPwdBorder = false;
  normalPwdBorder = false;
  disabledButton = true;

  ngOnInit() {
    this.watchForm();
  }

  watchForm() {
    setInterval(() => {
      if (
        this.passwordOne === this.passwordTwo && 
        this.passwordOne != '' && 
        this.passwordTwo != '' && 
        this.passwordTwo.length > 7 &&
        this.greenPwdBorder == true) {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    }, 500);
  }

  sendMail() {
    console.log('hi')
  }

  changeBorderColorPwdOne(event) {
    if (event.isTrusted == true) {
      this.redPwdOneBorder = true;
    }

    if (this.passwordOne.length > 7) {
      this.redPwdOneBorder = false;
      this.normalPwdBorder = true;
    } else {
      this.redPwdOneBorder = true;
      this.normalPwdBorder = false;
    }
  }

  changeBorderColorPwdTwo(event) {
    if (this.passwordTwo === this.passwordOne && this.passwordTwo.length > 7) {
      this.redPwdTwoBorder = false;
      this.greenPwdBorder = true;
    } else {
      this.redPwdTwoBorder = true;
      this.greenPwdBorder = false;
    }
  }
}
