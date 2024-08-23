import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardUrgentComponent } from '../../components/card-urgent/card-urgent.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, CardComponent, CardUrgentComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  httpClient = inject(HttpClient)
  loginStatus:Boolean = false;
  
  helpArry: cardHelp[] = [];
  instructions = [
    {
      title: "Escolha",
      description: "Escolha um helpinho que deseja ajudar"
    },
    {
      title: "Doe",
      description: "O valor é você quem decide, e ele vai todo para quem escolher"
    },
    {
      title: "Aproveite",
      description: "Doar gera felicidade para você e para quem recebeu"
    },
    {
      title: "Acompanhe",
      description: "Fique ligado, acompanhe se o helpinho alcançou o objetivo"
    }
  ]

  ngOnInit():void {
    this.httpClient.get<cardHelp[]>('api/help').subscribe((helps) => {
      this.helpArry = helps
    });
  }

}

type cardHelp = {
  title: string;
  decription: string;
  type: string;
  image: string;
  urgent:boolean
  author: {
      name: string;
      email: string;
      image: string;
  };
  supporters: string[];
}