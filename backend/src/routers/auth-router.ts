import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { userRepository } from "../repositories/user-repositorie";
import { authRepository } from "../repositories/auth-repositorie";
import { JWTService } from "../services/JWT-service";


const authRouter = Router();

authRouter
    .post("/", async (req: Request, res: Response ) => {
        const data = req.body as userSession;
        const userObj = await userRepository.getByEmail(data.email);
        
        //Verificação se existe o usuario
        if(!userObj){
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        }

        //Verificação se a senha está correta
        if(data.password !== userObj.password) {
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        }
        
        //Verificar se o usuario já está em uma sessão
        const userSession = await authRepository.getByIdUser(userObj.id)
        if(userSession){
            return res.status(httpStatus.OK).json(userSession);
        }

        //Geração de token
        const token = JWTService.sing({userId: userObj.id})
        //Verifica se existe uma string JWT no .env
        if(token === "JWT_SECRET_NOT_FOUND") {
            return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        }

        const newSession = await authRepository.created(userObj, token)
        return res.status(httpStatus.CREATED).json(newSession);        

    })

    //Rota para teste
    /*
    .get("/teste", async (req: Request, res: Response ) => {
        const arrayUsers = [await authRepository.getAll()];
        return res.status(httpStatus.OK).json(arrayUsers);
    })
    */
   
interface userSession {
    email: string;
    password: string
}

export {authRouter}