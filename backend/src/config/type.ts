import { ulid } from "ulid";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    date: string;
    number: number;
    image: string;

    constructor(data: any) {
        this.id = ulid();
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.date = data.date
        this.image = "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
        this.number = data.number
    }
}

export class Help {
    id: string;
    title: string;
    description: string;
    type: string;
    gols: string;
    image: string;
    author: string;
    urgent: boolean;

    constructor(data:any, idUser:string){
        this.id = ulid();
        this.title = data.title;
        this.description = data.description;
        this.type = data.type;
        this.gols = data.gols;
        this.image = data.image;
        this.author = idUser;
        this.urgent = data.urgent;
    }

    interface 

}

export class Session {
    id: string;
    userId: string;
    name: string;
    email: string;
    image: string;
    token: string;

    constructor(data:any) {
        this.id = ulid();
        this.userId = data.userId;
        this.name = data.name;
        this.email = data.email;
        this.image = data.image;
        this.token = data.token;
    }
}

export class Donate {
    id: string;
    userId: string;
    helpId: string;
    donate: string;

    constructor(data:any, idUser:string) {
        this.id = ulid();
        this.userId = idUser;
        this.helpId = data.helpId;
        this.donate = data.donate;
    }
}