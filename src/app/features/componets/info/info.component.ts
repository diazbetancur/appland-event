import { Component } from '@angular/core';
import { InfoConfig } from './info.config';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  public config = InfoConfig;
}
