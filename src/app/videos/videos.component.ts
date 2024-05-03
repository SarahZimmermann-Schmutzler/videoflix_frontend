import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  isClicked = false;

  constructor(private router: Router) {}

  navStart() {
    this.router.navigateByUrl('/videos');
  }

  navVid() {
    this.router.navigateByUrl('/video-detail');
  }
}
