import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public videoId: string;

  loadVideos() {
    const url = environment.baseURL + '/api/videos/';
    return lastValueFrom(this.http.get(url));
  }

  loadCurrentVideo(videoId) {
    const url = `${environment.baseURL}/api/videos/${videoId}/`;
    return lastValueFrom(this.http.get(url));
  }
}
