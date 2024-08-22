import { db } from "./database";

export class User {
    id: Number;
    name: string;
    email: string;
    password: string;
    date: Date;
    number: number;
    image: string;
    created: Date;
    updated: Date;

    constructor(data: any) {
        this.id = db.user.length;
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