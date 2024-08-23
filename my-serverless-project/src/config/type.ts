import { ulid } from "ulid";
import { db } from "./database";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    date: Date;
    number: number;
    image: string;
    created: Date;
    updated: Date;

    constructor(data: any) {
        this.id = ulid();
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.date = data.date
        this.image = "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        this.number = data.number
        this.created = new Date();
        this.updated = new Date();
    }
}

export class Help {
    id: string;
    title: string;
    description: string;
    type: string;
    image: string;
    author: Number;
    urgent: boolean;
    supportes: string[];
    created: Date;
    updated: Date;

    constructor(data:any){
        this.id = ulid();
        this.title = data.title;
        this.description = data.description;
        this.type = data.type;
        this.image = data.image
        this.author = data.
        this.urgent = data.urgent
        this.supportes = []
        this.created = new Date();
        this.updated = new Date();
    }




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