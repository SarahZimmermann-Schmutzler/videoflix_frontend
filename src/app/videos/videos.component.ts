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

  constructor() {}

  ngOnInit() {

  }

  hideLogoutMenu() {
      setTimeout(() => {
      this.showMenu = false;
    }, 1000)
  }
}

