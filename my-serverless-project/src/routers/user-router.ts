import { Request, Response, Router } from "express";
import httpStatus from "http-status";
//const bcrypt = require("bcrypt");

import { UserPararm } from "../schemas/user-schema";
import { userRepository } from "../repositories/user-repositorie";

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


    .get("/teste", async (req: Request, res: Response ) => {
        const arrayUsers = [await userRepository.getAll()];
        return res.status(httpStatus.OK).json(arrayUsers);
    })


export { userRouter };