import { Component } from '@angular/core';
import { BannerConfig } from './banner.config';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  public config = BannerConfig;
}
