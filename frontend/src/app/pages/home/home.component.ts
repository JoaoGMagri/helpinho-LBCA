import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardUrgentComponent } from '../../components/card-urgent/card-urgent.component';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../service/storage.service';
import { cardHelp } from '../../types/cardHelp-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, CardComponent, CardUrgentComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  httpClient = inject(HttpClient)
  storage = inject(StorageService)
  loginStatus = this.storage.status();
  
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