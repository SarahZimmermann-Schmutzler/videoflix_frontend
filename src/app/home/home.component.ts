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


  constructor(private router: Router, private service: HomeService) { }

  ngOnInit() {
    
  }

  toRegister() {
    localStorage.setItem('email-adress', this.email);
    this.service.getSubject(this.email);
    this.service.myData = this.email;
    this.router.navigateByUrl('/register');
  }

  //   if(email != null && email.length > 5){
  //     // Your code...
  // }

}
