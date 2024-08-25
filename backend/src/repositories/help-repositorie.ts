import { db } from "../config/database";
import { Help } from "../config/type";

async function created(data:any, idUser:string){
    let newHelp = new Help(data, idUser) 
    db.help.push(newHelp);
    return(newHelp);
}

async function getAll() {
    return db.help
}

async function getById(id: string) {
    let helpById = db.help.find(user => user.id === id)

    return(helpById);
}

async function getAllByIdUser(id:string){
    const usersIdHelp = db.help.map( help => {
        if(help.author === id) {
            return help 
        }
        return null;
    });

    return(usersIdHelp);
}

export const helpRepository = {
    created,
    getAll,
    getById,
    getAllByIdUser
}