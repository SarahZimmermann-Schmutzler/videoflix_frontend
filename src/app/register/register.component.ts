import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';

  constructor(public service: HomeService) { }

  ngOnInit() {
    let emailFromHome = localStorage.getItem('email-adress');
    this.email = emailFromHome;

  }

}
