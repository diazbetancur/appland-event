import { Component } from '@angular/core';
import { FooterConfig } from './footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public config = FooterConfig;
}
