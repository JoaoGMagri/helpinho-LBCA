import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-apresentation',
  standalone: true,
  imports: [],
  templateUrl: './banner-apresentation.component.html',
})
export class BannerApresentationComponent {
  texts:string[] = ["Registro grátis", "Sem taxas", "Rápido e prático"]
}
