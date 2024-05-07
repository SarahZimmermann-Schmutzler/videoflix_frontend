import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  containerWidth: number = 200; // Breite eines einzelnen Containers in Pixel
  containerCount: number = 10; // Anzahl der Container
  currentIndex: number = 0;

  prevContainers: number = 2; // Anzahl der vorherigen Container, die sichtbar sein sollen
  nextContainers: number = 3; // Anzahl der folgenden Container, die sichtbar sein sollen

  get visibleContainers(): number[] {
    const startIndex = Math.max(this.currentIndex - this.prevContainers, 0);
    const endIndex = Math.min(this.currentIndex + this.nextContainers, this.containerCount);
    return Array.from({ length: endIndex - startIndex }, (_, index) => startIndex + index);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.containerCount) % this.containerCount;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.containerCount;
  }
}
