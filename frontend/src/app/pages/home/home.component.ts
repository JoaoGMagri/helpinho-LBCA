import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerApresentationComponent } from '../../components/banner-apresentation/banner-apresentation.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerApresentationComponent, CardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  instructions = [
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    },
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    },
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    },
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    }
  ]

}
