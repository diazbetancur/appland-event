import { Component } from '@angular/core';
import { MenuConfig } from './menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public config = MenuConfig;

  scrollTo(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get whatsappLink(): string {
    return `https://wa.me/${this.config.i18n.phone
      .replace(' ', '')
      .replace('-', '')}`;
  }
}
