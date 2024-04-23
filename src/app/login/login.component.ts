import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  email = '';
  redMailBorder = false;
  redPwdBorder = false;
  disabledButton = true;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.watchForm();
  }

  async login() {
    let partBeforeAt = this.email.split('@');
    this.username = partBeforeAt[0];
    try {
      let resp = await this.authservice.loginWithUserAndPassword(this.username, this.password);
      localStorage.setItem('token', resp['token'])
      console.log('Erfolgreich')
      // this.router.navigateByUrl('/boards').then(() => {
      //   window.location.reload();
      // });
    } catch (e) {
      console.error(e);
      // window.location.reload();
    }
  }

  watchForm() {
    setInterval(() => {
      if (this.redMailBorder == false && this.redPwdBorder == false) {
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
    } else {
      this.redMailBorder = true;
    }

    if (this.password.length > 7) {
      this.redPwdBorder = false;
    } else {
      this.redPwdBorder = true;
    }
  }
}
