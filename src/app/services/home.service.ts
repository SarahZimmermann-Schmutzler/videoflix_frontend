import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hello = new Subject();

  constructor() { }

  public myData: string;

  getSubject(data) {
    this.hello.next(data);
  }

}
