import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {

  @Output() videoDetailPopup = new EventEmitter()

  // prevents closing popup by clicking on popup-content
  doNotClose(e: Event) {
    e.stopPropagation();
  }

  // closes the video-detail-popup
  closeVideoDetail() {
    this.videoDetailPopup.emit(false);
  }
}
