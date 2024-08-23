import { db } from "../config/database";
import { User } from "../config/type";
import { UserPararm } from "../schemas/user-schema";

async function created(data: UserPararm){
    let newUser = new User(data) 
    db.user.push(newUser);
    return(newUser);
}

async function getByEmail(email: string) {
    let userByEmail = db.user.find(user => user.email === email)
    return(userByEmail);
}

async function getById(id: string) {
    let userByEmail = db.user.find(user => user.id === id)
    return(userByEmail);
}

async function getAll() {
    return db.user
}

export const userRepository = {
    created,
    getById,
    getByEmail,
    getAll,
}