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
  redPwdTwoBorder = false;
  redPwdOneBorder = false;
  greenPwdBorder = false;
  normalPwdBorder = false;
  disabledButton = true;
  sthWrong = false;
  success = false;

  constructor(
    private authservice: AuthService, 
    private router: Router, 
    public route:ActivatedRoute) { }
  

  ngOnInit() {
    this.watchForm();
  }


  // watches form and enables button if form is properly filled out
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


  // decodes pk from url
  // resets password
  // navigates user to login page
  async resetPassword() {
    this.encoded_pk = this.route.snapshot.paramMap.get('encoded_pk');
    this.decoded_pk = atob(this.encoded_pk);

    try {
      let resp = await this.authservice.passwordReset(
        this.decoded_pk,
        this.passwordTwo
      );
      this.success = true;
      setTimeout(() => {
        this.goToLogin()
      }, 2000);
    } catch (e) {
      this.sthWrong = true;
    }
  }

  
  // navigates user to login page
  goToLogin() {
    this.router.navigateByUrl('/login')
  }


  // changes border-color from password field in form when password is appropriate
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

  
  // changes border-color from password field in form when password is same as password one
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
