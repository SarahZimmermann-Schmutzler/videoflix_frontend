import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video.service';

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
  currentUserId = '';
  videos: any = [];
  // nach bearbeiten videoDetail Popup false stellen
  videoDetailPopup = true;
  showFooter = true;

  dummyArray = [
    {
      'title': 'Ocean from Above',
      'img': 'ocean_above.jpg'
    },

    {
      'title': 'Water and Rocks',
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

  // @ViewChild('carousel') carousel: ElementRef;

  constructor(
    public router: Router, 
    public authservice: AuthService, public videoService: VideoService) { }

  async ngOnInit() {
    this.videos = await this.videoService.loadVideos();
    console.log(this.videos)
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

  async logout() {
    this.currentUserId = this.authservice.currentUser;
    
    try {
      let resp = await this.authservice.logout(this.currentUserId);
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    } catch (e) {
      console.error(e);
      // window.location.reload();
    }

    
  }

  slideRight() {
    this.also_left_slide = true;
    this.slide_left = true;

    if (this.videos.length > 0) {
      // wenn Array mind. 1 Object
      let nextElement = this.videos[this.nextIndex];
      // nextElement ist Array an Stelle 0;
      this.videos.push(nextElement);
      // Array an Stelle 0 (=erstes Element) wird in das Array gepusht
      this.nextIndex = (this.nextIndex + 1) % this.videos.length;
      // next Index wird um 1 vermindert bis Array zuende ist
      // console.log(this.dummyArray.length)
    }

    if (this.currentIndex === this.videos.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }


  slideLeft() {
    // if (this.currentIndex === 0) {
    //   // this.currentIndex = this.dummyArray.length - 1;
    // } else {
    //   this.currentIndex--;
    // }

    if (this.currentIndex != 0) {
      this.currentIndex--;
      this.videos.pop();
      // console.log(this.dummyArray.length)
      // console.log(this.currentIndex)
    }

    if(this.currentIndex == 0) {
      this.also_left_slide = false;
      this.slide_left = false;
      this.slide_left_stay = false;
    }
  }

  closeVideoPopup($event) {
    this.videoDetailPopup = ($event);
  }
}

