import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, CardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

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

  testes = [
    {
      title:"Comprar um PS5",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Games",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg",
      },
      supporters: []
    },
    {
      title:"Comprar um PS6",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Literatura",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg",
      },
      supporters: []
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg",
      },
      supporters: []
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg", 
      },
      supporters: ["assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg"]
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg", 
      },
      supporters: ["assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg"]
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg" 
      },
      supporters: ["assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg"],
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg" 
      },
      supporters: ["assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg"],
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Doença",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg", 
      },
      supporters: ["assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg","assets/usuario.jpg"]
    },
    {
      title:"Comprar um PS7",
      decription:"Meu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novoMeu PS2 queimou e preciso comprar um novo, falta R$5000 para comprar um novo",
      type: "Games",
      image: "assets/usuario.jpg",
      author: { 
        name: "Olivia Rhye", 
        email: "olivia@untitledui.com", 
        image: "assets/usuario.jpg",
      },
      supporters: []
    },
]

}
