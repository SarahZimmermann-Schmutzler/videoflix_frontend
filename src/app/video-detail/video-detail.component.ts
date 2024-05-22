import { Component, EventEmitter, Output } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {

  @Output() videoDetailPopup = new EventEmitter()
  currentVideo: any = '';
  videoId = '';
  localServer = 'http://127.0.0.1:8000';
  googleVM = 'https://backend.s-zimmermann-schmutzler.de/videoflix';
  clicked1080 = false;
  clicked720 = false;
  clicked480 = true;
  low = '_480p';
  middle = '_720p';
  high = '_1080p';
  mp4 = '.mp4';
  videoSource = '';

  constructor(public videoService: VideoService) {}

  ngOnInit() {
    this.loadVideo();
  }


  async loadVideo() {
    this.videoId = this.videoService.videoId;
    this.currentVideo = await this.videoService.loadCurrentVideo(this.videoId);
    this.clickVideo(this.low, false, false, true);
  }


  clickVideo(resolution, c1080, c720, c480) {
    this.clicked1080 = c1080;
    this.clicked720 = c720;
    this.clicked480 = c480;
    let currentVideoFilePath = this.currentVideo.video_file;
    let renamedPath = currentVideoFilePath.replace(this.mp4, resolution);
    this.videoSource = this.localServer + renamedPath + this.mp4;
  }


  // prevents closing popup by clicking on popup-content
  doNotClose(e: Event) {
    e.stopPropagation();
  }


  // closes the video-detail-popup
  closeVideoDetail() {
    this.videoDetailPopup.emit(false);
  }
}
