import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss', './videos_content.component.scss']
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
  encodedUserId = '';
  videos: any = [];
  videoDetailPopup = false;
  showFooter = true;
  localServer = 'http://127.0.0.1:8000';
  googleVM = 'https://backend.s-zimmermann-schmutzler.de/videoflix';

  constructor(
    public router: Router,
    public authservice: AuthService, public videoService: VideoService) { }


  async ngOnInit() {
    this.videos = await this.videoService.loadVideos();
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView
  }


  // hides logout popup afer 1sec
  hideLogoutMenu() {
    setTimeout(() => {
      this.showMenu = false;
    }, 1000)
  }


  // hides slider element afer 0.5sec
  hideSlider() {
    setTimeout(() => {
      this.slide_right = false;
      this.slide_left = false;
    }, 500)
  }


  // shows right slider element
  showSlider() {
    this.slide_right = true;
    if (this.also_left_slide == true) {
      this.slide_left = true;
    }
  }


  // shows left slider element
  showLeftSlide() {
    if (this.also_left_slide == true) {
      this.slide_left_stay = true;
    }
  }


  // fetches user id from LS, decodes it and logs user out
  async logout() {
    this.encodedUserId = localStorage.getItem('id');
    this.currentUserId = window.atob(this.encodedUserId);

    try {
      let resp = await this.authservice.logout(this.currentUserId);
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    } catch (e) {
      console.error(e);
    }
  }


  // slides video-carousel to the right (first element of array at end of array)
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
    }

    if (this.currentIndex === this.videos.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }


  // slides video-carousel to the left (last element of array pops)
  slideLeft() {
    if (this.currentIndex != 0) {
      this.currentIndex--;
      this.videos.pop();
    }

    if (this.currentIndex == 0) {
      this.also_left_slide = false;
      this.slide_left = false;
      this.slide_left_stay = false;
      window.location.reload();
    }
  }


  // closes video popup
  closeVideoPopup($event) {
    this.videoDetailPopup = ($event);
  }


  // opens video popup
  openVideoPopup(videoId) {
    this.videoDetailPopup = true;
    this.showFooter = false;
    this.videoService.videoId = videoId;
  }
}

