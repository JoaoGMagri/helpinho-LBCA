import { Component, input } from '@angular/core';
import { cardHelp } from '../../types/cardHelp-type';

@Component({
  selector: 'app-help-container',
  standalone: true,
  imports: [],
  templateUrl: './help-container.component.html',
  styleUrl: './help-container.component.css'
})
export class HelpContainerComponent {
  help =  input<cardHelp>();
}
