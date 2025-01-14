import { Component } from '@angular/core';
import { EventPastConfig } from './past-event.config';

@Component({
  selector: 'app-past-event',
  templateUrl: './past-event.component.html',
  styleUrl: './past-event.component.scss',
})
export class PastEventComponent {
  public config = EventPastConfig;
}
