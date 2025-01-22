import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpeakersConfig } from './speakers.config';
import { Speaker } from '../../../entities/speaker';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent implements OnInit, OnDestroy {
  public config = SpeakersConfig;
  public speakers: Speaker[] = [];

  translateValue: number = 0;
  visibleSlides: number = 4;
  slideWidth: number = 250;
  interval: any;

  isDragging = false;
  startX = 0;
  currentTranslate = 0;

  constructor() {
    this.speakers = this.config.speakers;
  }

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.moveNext();
    }, 3000);
  }

  moveNext() {
    const totalSlides = this.speakers.length;
    const maxTranslate = -(
      this.slideWidth *
      (totalSlides - this.visibleSlides)
    );

    if (this.translateValue > maxTranslate) {
      this.translateValue -= this.slideWidth;
    } else {
      this.translateValue = 0;
    }
  }

  onMouseDown(event: MouseEvent) {
    clearInterval(this.interval);
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentTranslate = this.translateValue;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dragDistance = event.clientX - this.startX;
      this.translateValue = this.currentTranslate + dragDistance;
    }
  }

  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      this.snapToSlide();
      this.startCarousel();
    }
  }

  snapToSlide() {
    const slideIndex = Math.round(this.translateValue / -this.slideWidth);
    const maxSlides = this.speakers.length - this.visibleSlides;

    if (slideIndex < 0) {
      this.translateValue = 0;
    } else if (slideIndex > maxSlides) {
      this.translateValue = -this.slideWidth * maxSlides;
    } else {
      this.translateValue = -this.slideWidth * slideIndex;
    }
  }

  selectedSpeaker: any = null;

  openModal(speaker: any) {
    this.selectedSpeaker = speaker;
  }

  closeModal() {
    this.selectedSpeaker = null;
  }
}
