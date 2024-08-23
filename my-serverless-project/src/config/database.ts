import { Help, Session, User } from "./type";


export const db: userTyper = {
    user: [],
    help:[
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
          urgent:true,
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
          urgent:false,
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
          urgent:false,
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
          urgent:false,
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
          urgent:true,
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
          urgent:false,
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
          urgent:false,
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
          urgent:false,
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
          urgent:true,
          supporters: []
        }
    ],
    donation:[],
    session:[]
};

type userTyper = {
    user: User[]
    help: any[]
    donation: any[]
    session: Session[]
}

