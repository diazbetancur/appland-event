import { Component, OnInit } from '@angular/core';
import { CounterConfig } from './counter.config';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  public config = CounterConfig;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  gmtOffset: string = '';
  showTime: boolean = false;

  private timer: any;

  ngOnInit() {
    if (this.config.eventDate && this.config.GMT) {
      this.calculateTimeDifference();
      this.startTimer();
    } else {
      this.showTime = false;
    }
  }

  calculateTimeDifference() {
    const startDate = new Date(this.config.eventDate);
    const gmtOffsetMilliseconds = this.config.GMT * 60 * 60 * 1000;
    const adjustedStartDate = new Date(
      startDate.getTime() - gmtOffsetMilliseconds
    );
    const adjustedCurrentDate = new Date(
      new Date().getTime() - gmtOffsetMilliseconds
    );
    const diffInSeconds = Math.floor(
      (adjustedCurrentDate.getTime() - adjustedStartDate.getTime()) / 1000
    );
    this.days = Math.abs(Math.floor(diffInSeconds / (3600 * 24)));
    this.hours = Math.abs(Math.floor((diffInSeconds % (3600 * 24)) / 3600));
    this.minutes = Math.abs(Math.floor((diffInSeconds % 3600) / 60));
    this.seconds = Math.abs(diffInSeconds % 60);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
