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

  constructor(public videoService: VideoService) {}

  async ngOnInit() {
    this.videoId = this.videoService.videoId;
    this.currentVideo = await this.videoService.loadCurrentVideo(this.videoId);
    console.log(this.currentVideo);
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
