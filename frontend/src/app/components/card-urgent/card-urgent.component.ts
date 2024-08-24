import { Component, input } from '@angular/core';
import { cardHelp } from '../../types/cardHelp-type';

@Component({
  selector: 'app-card-urgent',
  standalone: true,
  imports: [],
  templateUrl: './card-urgent.component.html',
})
export class CardUrgentComponent {
  data = input<cardHelp>();
}

