import { Component } from '@angular/core';
import { GeneralConfig } from './general.config';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
})
export class GeneralComponent {
  public config = GeneralConfig;
}
