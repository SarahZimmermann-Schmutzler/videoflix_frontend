import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';

  constructor(public service: HomeService) { }

  ngOnInit() {
    this.email = this.service.registerMail;
  }

}
