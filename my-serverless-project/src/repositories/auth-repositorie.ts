import { db } from "../config/database";
import { Session } from "../config/type";

async function created(userObj:any, token:string ) {
    const sessionObj= {
        userId: userObj.id,
        name: userObj.name,
        email: userObj.email,
        image: userObj.image,
        token: token
    };

    let newSession = new Session(sessionObj) 
    db.session.push(newSession);
    return(newSession);

}

async function getByIdUser(id: string) {
    let userByIdUser = db.session.find(user => user.userId == id)
    return(userByIdUser);
}

async function getById(id: string) {
    let userByIdUser = db.session.find(user => user.id == id)
    return(userByIdUser);
}

async function getAll() {
    return db.session
}

export const authRepository = {
    created,
    getByIdUser,
    getById,
    getAll,
}