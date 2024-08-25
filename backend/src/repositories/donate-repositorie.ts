import { db } from "../config/database";
import { Donate } from "../config/type";
import { userRepository } from "./user-repositorie";

async function created(data:any, idUser:string){
    let newDonate = new Donate(data, idUser) 
    db.donation.push(newDonate);
    return(newDonate);
}

async function getByIdHelp(id:string){
    const usersIdDonate = db.donation.map( donate => {
        if(donate.helpId === id) {
            return donate 
        }
        return null;
    });

    return(usersIdDonate);
}

async function getByIdUser(id:string){
    const usersIdDonate = db.donation.map( donate => {
        if(donate.userId === id) {
            return donate 
        }
        return null;
    });

    return(usersIdDonate);
}

export const donationRepository = {
    created,
    getByIdHelp,
    getByIdUser
}