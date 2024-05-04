import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  showMenu = false;
  stay = false;

  constructor() {}

  ngOnInit() {

  }



  hideLogoutMenu() {
    if(this.showMenu == true) {
      setTimeout(() => {
      this.showMenu = false;
    }, 1000)

    if(this.showMenu == true && this.stay == true) {
      setTimeout(() => {
      this.showMenu = true;
    }, 1000)
  }
    
}}

  showLogoutMenu() {
    this.showMenu = true;
    this.stay = true;
  }

}

