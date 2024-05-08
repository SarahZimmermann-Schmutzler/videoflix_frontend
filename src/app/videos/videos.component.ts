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
  preview_element_width = 230;
  nextIndex = 0;
  previousIndex: number;

  dummyArray = [
    {
      'title': 'Coming Soon1',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon2',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon3',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon4',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon5',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon6',
      'img': 'quelle'
    },

    {
      'title': 'Coming Soon7',
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
    // this.slideWidth = 230; // Breite eines einzelnen Slides in Pixel
    // this.dummyArray.push(this.dummyArray[0]);
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
    if (this.also_left_slide == true) {
      this.slide_left = true;
    }
  }

  showLeftSlide() {
    if (this.also_left_slide == true) {
      this.slide_left_stay = true;
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

    if (this.dummyArray.length > 0) {
      // wenn Array mind. 1 Object
      let nextElement = this.dummyArray[this.nextIndex];
      // nextElement ist Array an Stelle 0;
      this.dummyArray.push(nextElement);
      // Array an Stelle 0 (=erstes Element) wird in das Array gepusht
      this.nextIndex = (this.nextIndex + 1) % this.dummyArray.length;
      // next Index wird um 1 vermindert bis Array zuende ist
      console.log(this.dummyArray.length)
    }

    if (this.currentIndex === this.dummyArray.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }


  slideLeft() {

    // if (this.dummyArray.length > 0) {
    //   // wenn Array mind. 1 Object
    //   this.previousIndex = this.dummyArray.length
    //   let previousElement = this.dummyArray[this.previousIndex];
    //   // prevoiusElement ist Array an letzter Stelle;
    //   this.dummyArray.push(previousElement);
    //   // Array an letzter Stelle 0 (=letztes Element) wird in das Array gepusht
    //   this.previousIndex = (this.nextIndex - 1) % this.dummyArray.length;
    //   // // next Index wird erhöht um 1 bis Array zuende ist
    //   // console.log(this.dummyArray.length)
    // }

    // if (this.dummyArray.length > 0) {
    //   let lastElement = this.dummyArray[this.dummyArray.length - 1];
    //   // das letzte Element des Arrays erhalten
    //   this.dummyArray.push(lastElement);
    //   // das letzte Element ans Ende des Arrays hinzufügen
    //   console.log(this.dummyArray.length);
    // }

  //   let currentIndex = 0;

  //   if (this.dummyArray.length > 0) {
  //     let index = this.dummyArray.length - 1 - currentIndex;
  //     if (index >= 0) {
  //         let previousElement = this.dummyArray[index];
  //         this.dummyArray.unshift(previousElement); // unshift() fügt das Element am Anfang des Arrays hinzu
  //         console.log(this.dummyArray.length);
  //         currentIndex++;
  //     } else {
  //         console.log("All objects added, starting from the last object again");
  //         currentIndex = 0; // Index zurücksetzen, um wieder von vorne zu beginnen
  //     }
  // }

    if (this.currentIndex === 0) {
      this.currentIndex = this.dummyArray.length - 1;
    } else {
      this.currentIndex--;
    }
  }
}

