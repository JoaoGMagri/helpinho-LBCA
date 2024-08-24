import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  texts:string[] = ["Registro grátis", "Sem taxas", "Rápido e prático"]

  loginStatus = input();
}
