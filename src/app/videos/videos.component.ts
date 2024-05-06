import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  showMenu = false;
  showAlsoMenu = false;
  newColor = false;
  searchline = false;
  dummyArray = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];

  constructor() {}

  ngOnInit() {

  }

  scroll(el: HTMLElement){
    el.scrollIntoView
  }

  hideLogoutMenu() {
      setTimeout(() => {
      this.showMenu = false;
    }, 1000)
  }
}

