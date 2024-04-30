import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  email = '';
  passwordOne = '';
  passwordTwo = '';
  encoded_pk = '';
  decoded_pk = '';
  // token = '';
  redPwdTwoBorder = false;
  redPwdOneBorder = false;
  greenPwdBorder = false;
  normalPwdBorder = false;
  disabledButton = true;

  constructor(
    private authservice: AuthService, 
    private router: Router, 
    public route:ActivatedRoute) { }
  
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

  // sendMail() {
  //   console.log('hi')
  // }

  async resetPassword() {
    this.encoded_pk = this.route.snapshot.paramMap.get('encoded_pk');
    this.decoded_pk = atob(this.encoded_pk);
    // this.token = this.route.snapshot.paramMap.get('token');

  
    try {
      let resp = await this.authservice.passwordReset(
        this.decoded_pk,
        this.passwordTwo
      );
      this.goToLogin();
    } catch (e) {
      console.error(e);
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login')
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
