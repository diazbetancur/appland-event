import { Component } from '@angular/core';
import { SpeakersConfig } from './speakers.config';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent {
  public config = SpeakersConfig;
}
