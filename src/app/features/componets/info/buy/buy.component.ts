import { Component, EventEmitter, Output } from '@angular/core';
import { BuyConfig } from './buy.config';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss',
})
export class BuyComponent {
  @Output() close = new EventEmitter<void>();
  public config = BuyConfig;

  closeModal() {
    this.close.emit();
  }
}
