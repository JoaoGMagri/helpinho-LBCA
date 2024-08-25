import { Component, input } from '@angular/core';
import { cardHelp } from '../../types/cardHelp-type';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  help =  input<cardHelp>();
}
