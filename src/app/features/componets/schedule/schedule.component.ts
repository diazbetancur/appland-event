import { Component } from '@angular/core';
import { ScheduleConfig } from './schedule.config';
import { EventDay } from '../../../entities/event-day';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  public config = ScheduleConfig;
  public events: EventDay[] = [];

  constructor() {
    this.events = this.config.events;
  }
}
