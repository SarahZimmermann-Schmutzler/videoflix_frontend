import { Component, EventEmitter, Output } from '@angular/core';
import { VideoService } from '../services/video.service';
import {environment} from 'src/environments/environment';

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
  //googleVM = 'https://backend.s-zimmermann-schmutzler.de';
  remoteServer = environment.baseURL;
  //remoteServer = 'http://49.12.234.250:6262';
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


  // loads clickes video (480p) from backend
  async loadVideo() {
    this.videoId = this.videoService.videoId;
    this.currentVideo = await this.videoService.loadCurrentVideo(this.videoId);
    this.clickVideo(this.low, false, false, true);
  }


  // loads video in diffrent resolutions
  clickVideo(resolution, c1080, c720, c480) {
    this.clicked1080 = c1080;
    this.clicked720 = c720;
    this.clicked480 = c480;
    let currentVideoFilePath = this.currentVideo.video_file;
    let renamedPath = currentVideoFilePath.replace(this.mp4, resolution);
    this.videoSource = this.remoteServer + renamedPath + this.mp4;
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
