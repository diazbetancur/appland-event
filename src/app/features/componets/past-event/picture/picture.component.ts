import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
})
export class PictureComponent {
  @Input() pathPhoto: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
