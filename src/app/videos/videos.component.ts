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
  slide_right = false;
  slide_right_stay = false;
  slide_left = false;
  slide_left_stay = false;
 
  dummyArray = [
    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon',
      'img': 'quelle'
    },
    
  ];

  constructor(public router: Router) {}

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

  hideSlider() {
    setTimeout(() => {
    this.slide_right = false;
  }, 500)
}

  logout() {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  slideRight() {
    this.slide_left = true;
  }
}

