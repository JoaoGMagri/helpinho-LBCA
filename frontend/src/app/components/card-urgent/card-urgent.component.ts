import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-urgent',
  standalone: true,
  imports: [],
  templateUrl: './card-urgent.component.html',
})
export class CardUrgentComponent {
  data = input<cardHelp>();
}
  
type cardHelp = {
  title: string;
  decription: string;
  type: string;
  image: string;
  author: {
      name: string;
      email: string;
      image: string;
  };
  supporters: string[];
}

