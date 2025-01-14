import { Component, Input } from '@angular/core';
import { EventDay } from '../../../entities/event-day';

@Component({
  selector: 'app-eventday',
  templateUrl: './eventday.component.html',
  styleUrl: './eventday.component.scss',
})
export class EventdayComponent {
  @Input() eventDaty: EventDay = {} as EventDay;
  itemsToShow = 2;
  showingAll = false;

  get visibleEvents() {
    return this.showingAll
      ? this.eventDaty.event
      : this.eventDaty.event.slice(0, this.itemsToShow);
  }

  showMore() {
    this.showingAll = !this.showingAll;
  }
}
