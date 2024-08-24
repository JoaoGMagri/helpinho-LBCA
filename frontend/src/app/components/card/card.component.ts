import { Component, input } from '@angular/core';
import { cardHelp } from '../../types/cardHelp-type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})

export class CardComponent {
  data = input<cardHelp>();
}