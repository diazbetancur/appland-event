import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speaker } from '../../../entities/speaker';

@Component({
  selector: 'app-card-speaker',
  templateUrl: './card-speaker.component.html',
  styleUrl: './card-speaker.component.scss',
})
export class CardSpeakerComponent {
  @Input() speaker: Speaker = {} as Speaker;
  @Output() speakerClick = new EventEmitter<Speaker>();
  isHovered: boolean = false;

  onClick() {
    this.speakerClick.emit(this.speaker);
  }

  public getFlag(country: string) {
    let flag = '';
    switch (country) {
      case 'Costa Rica':
        flag = 'cr';
        break;
      case 'Brasil':
        flag = 'br';
        break;
      case 'Perú':
        flag = 'pe';
        break;
      case 'Panamá':
        flag = 'pa';
        break;
      case 'Colombia':
        flag = 'co';
        break;
      case 'México':
        flag = 'mx';
        break;
      case 'España':
        flag = 'es';
        break;
      case 'Miami':
        flag = 'us';
        break;
      case 'R. Dom':
        flag = 'do';
        break;
      case 'EE.UU.':
        flag = 'us';
        break;
      case 'Chile':
        flag = 'cl';
        break;
      case 'Guatemala':
        flag = 'gt';
        break;
      case 'Republica Dominicana':
        flag = 'do';
        break;
      case 'Puerto Rico':
        flag = 'pr';
        break;
      default:
        flag = 'hn';
        break;
    }
    return `https://flagcdn.com/${flag.toLowerCase()}.svg`;
  }
}
