import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})

export class CardComponent {
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