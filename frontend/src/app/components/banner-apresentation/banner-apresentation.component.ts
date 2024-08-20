import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner-apresentation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner-apresentation.component.html',
})
export class BannerApresentationComponent {
  texts:string[] = ["Registro grátis", "Sem taxas", "Rápido e prático"]
}
