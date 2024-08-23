import { Request, Response, Router } from "express";
import httpStatus from "http-status";
//const bcrypt = require("bcrypt");

import { UserPararm } from "../schemas/user-schema";
import { userRepository } from "../repositories/user-repositorie";
import { validationToken } from "../middlewares/auth-middleware";

const userRouter = Router();

userRouter
    .post("/", async (req: Request, res: Response ) => {
        const data = req.body as UserPararm;

        const emailValidation = await userRepository.getByEmail(data.email);

        if(emailValidation){
            return res.sendStatus(httpStatus.CONFLICT)
        }

        //data.password = await bcrypt.hash(data.password, 10)

        const newUser = await userRepository.created(data)

        return res.status(httpStatus.CREATED).json(newUser);
    })

    .use("/*", validationToken)
    .get("/:id", async (req: Request, res: Response ) => {
        const data = req.params.id

        const user = await userRepository.getById(data)
        if(!user){
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }
        
        return res.status(httpStatus.ACCEPTED).json(user);
    })

    //Rota para testes
    .get("/teste/teste", async (req: Request, res: Response ) => {
        const arrayUsers = await userRepository.getAll();
        return res.status(httpStatus.OK).json(arrayUsers);
    })


export { userRouter };