import { Component, ElementRef, ViewChild } from '@angular/core';
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
  also_left_slide = false;
  slide_left_stay = false;
  currentIndex = 0;
  slideWidth: number;

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
      'title': 'LastOne',
      'img': 'quelle'
    },

  ];

  @ViewChild('carousel') carousel: ElementRef;

  constructor(public router: Router) { }

  ngOnInit() {
    this.slideWidth = 230; // Breite eines einzelnen Slides in Pixel
    this.dummyArray.push(this.dummyArray[0]);
  }

  scroll(el: HTMLElement) {
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
      this.slide_left = false;
    }, 500)
  }

  showSlider() {
    this.slide_right = true;
    if(this.also_left_slide == true) {
      this.slide_left = true;
    }
  }

  logout() {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  slideRight() {
    this.also_left_slide = true;
    this.slide_left = true;

    if (this.currentIndex === this.dummyArray.length - 1) {
      this.currentIndex = 0;
      setTimeout(() => {
        this.carousel.nativeElement.style.transition = 'none';
        console.log(this.carousel.nativeElement.style.transition)
        this.carousel.nativeElement.style.transform = 'translateX(0)';
        setTimeout(() => {
          this.carousel.nativeElement.style.transition = '';
        });
      }, 50);
    } else {
      this.currentIndex++;
    }
  }
  

  slideLeft() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.dummyArray.length - 1;
      setTimeout(() => {
        this.carousel.nativeElement.style.transition = 'none';
        this.carousel.nativeElement.style.transform = `translateX(-${this.slideWidth * (this.dummyArray.length - 1)}px)`;
        setTimeout(() => {
          this.carousel.nativeElement.style.transition = '';
        });
      }, 50);
    } else {
      this.currentIndex--;
    }
  }
}

