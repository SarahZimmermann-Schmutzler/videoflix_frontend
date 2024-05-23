import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email = '';
  redBorder = false;
  greenBorder = false;
  disabledButton = true;

  constructor(private router: Router, private service: HomeService) { }


  ngOnInit() {}


  // changes border-color from mail field in form when email-adress is appropriate
  changeBorderColor(event) {
    if(event.isTrusted == true) {
      this.redBorder = true;
    }

    if(this.email.includes("@") && this.email.includes("." )) {
      this.redBorder = false;
      this.greenBorder = true;
      this.disabledButton = false;
    } else {
      this.redBorder = true;
      this.greenBorder = false;
      this.disabledButton = true;
    }
  }


  // navigates user to the register site; saves mail adress in variable
  toRegister() {
    this.service.registerMail = this.email;
    this.router.navigateByUrl('/register');
  }
}
