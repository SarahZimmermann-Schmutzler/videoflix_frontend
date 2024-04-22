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

  constructor(private authservice: AuthService, private router: Router) { }

  async login() {
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
}
