import { Help, Session, User } from "./type";


export const db: userTyper = {
    user: [],
    help:[],
    donation:[],
    session:[]
};

type userTyper = {
    user: User[]
    help: any[]
    donation: any[]
    session: Session[]
}

/*

{
id: "1",
name: "joao",
email: "joao@joaoo",
password: "123456",
date: "2001-06-05",
number: 1234567890,
image: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
}

{
id: "1",
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
id: "2",
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
id: "3",
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
id: "4",
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
id: "5",
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
id: "6",
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
id: "7",
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
id: "8",
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
id: "9",
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


{
"id": "01J60AC0XQ76ME4TE846H1NGF7",
"userId": "1",
"name": "joao",
"email": "joao@joaoo",
"image": "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNzI0NDQwMjQ5fQ.hnGYKUDjmP802L95wwcyyLxohse7z1Ncyu6bSd__S7A"
}
    
*/