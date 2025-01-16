import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventPastConfig } from './past-event.config';

@Component({
  selector: 'app-past-event',
  templateUrl: './past-event.component.html',
  styleUrl: './past-event.component.scss',
})
export class PastEventComponent implements OnInit, OnDestroy {
  public config = EventPastConfig;

  photos: string[] = [];
  visibleGroups: string[][] = [];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.photos = this.config.pathImages;
    this.updateVisibleGroups();
    this.startAutoSlide();
    window.addEventListener('resize', this.updateVisibleGroups.bind(this));
  }
  ngOnDestroy() {
    this.stopAutoSlide();
    window.removeEventListener('resize', this.updateVisibleGroups.bind(this));
  }

  updateVisibleGroups() {
    const screenWidth = window.innerWidth;
    let groupSize: number;

    if (screenWidth <= 480) {
      groupSize = 1; // Móviles
    } else if (screenWidth <= 768) {
      groupSize = 3; // Tablets
    } else {
      groupSize = 6; // Escritorios
    }

    const start = this.currentIndex * groupSize;
    const end = start + groupSize;
    const slicedPhotos = this.photos.slice(start, end);
    this.visibleGroups = this.chunkArray(slicedPhotos, 3);

    if (slicedPhotos.length < groupSize) {
      this.currentIndex = 0;
    }
  }

  chunkArray(array: string[], chunkSize: number): string[][] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex * 6 >= this.photos.length) {
      this.currentIndex = 0;
    }
    this.updateVisibleGroups();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), 6000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
