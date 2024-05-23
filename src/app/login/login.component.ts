import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

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
  normalMailBorder = false;
  redPwdBorder = false;
  normalPwdBorder = false;
  disabledButton = true;
  wrongPwd = false;
  isChecked = false;
  currentToken = '';
  decodedToken = '';
  currentId = '';
  decodedId = '';


  constructor(
    private authservice: AuthService, 
    private router: Router,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.watchForm();
    this.userDataInStorage();
  }


  async login() {
    let partBeforeAt = this.email.split('@');
    this.username = partBeforeAt[0];
    try {
      let resp = await this.authservice.loginWithUserAndPassword(this.username, this.password);
      this.currentToken = resp['token'];
      this.currentId = resp['user_id'];
      this.decodedToken = window.btoa(this.currentToken);
      this.decodedId = window.btoa(this.currentId);
      localStorage.setItem('token', this.decodedToken);
      localStorage.setItem('id', this.decodedId);
      // this.authservice.currentToken = resp['token'];
      // this.authservice.currentUser = resp['user_id'];
      this.router.navigateByUrl('/videos');
    } catch (e) {
      this.wrongPwd = true;
    }
  }


  watchForm() {
    setInterval(() => {
      if (this.normalMailBorder == true && this.normalPwdBorder == true && this.redMailBorder == false && this.redPwdBorder == false) {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    }, 500);
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


  changeBorderColorPwd(event) {
    if (event.isTrusted == true) {
      this.redPwdBorder = true;
    }

    if (this.password.length > 7) {
      this.redPwdBorder = false;
      this.normalPwdBorder = true;
    } else {
      this.redPwdBorder = true;
      this.normalPwdBorder = false;
    }
  }


  rememberMe(event) {
    if(event.target.checked == true && this.email != '' && this.password != '') {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
    } 
    
    if (event.target.checked == false) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }

  
  userDataInStorage(){
    let rememberedMail = localStorage.getItem('email');
    let rememberedPwd = localStorage.getItem('password');

    if (rememberedMail != '' && rememberedPwd != '') {
      this.isChecked = true;
      this.email = rememberedMail;
      this.password = rememberedPwd;
    }
    
    if(rememberedMail == null || rememberedPwd == null) {
      this.email = '';
      this.password = '';
      this.isChecked = false;
    }
  }
}
