//import bcrypt from "bcrypt"
import { Request, Response, Router } from "express";
import httpStatus from "http-status";

import { UserPararm } from "../schemas/user-schema";
import { userRepository } from "../repositories/user-repositorie";
import { validationToken } from "../middlewares/auth-middleware";
import { donationRepository } from "../repositories/donate-repositorie";
import { helpRepository } from "../repositories/help-repositorie";

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
        console.log(data)
        const user = await userRepository.getById(data)
        if(!user){
            console.log(user)
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        const donate = await donationRepository.getByIdUser(user.id);
        let donateParticipation = 0;
        let donateValue = 0;
        if(donate.length > 0){
            for (let i = 0; i < donate.length; i++) {
                if(donate[i] != null){
                    donateParticipation++;
                    donateValue += donate[i].donate;
                }
            }
        }

        const help = await helpRepository.getAllByIdUser(user.id);
        let helpCreated = 0
        if(help.length > 0){
            for (let i = 0; i < help.length; i++) {
                if(help[i] != null){
                    helpCreated++;
                }
            }
        }

        const helpObj = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            date: user.date,
            number: user.number,
            image: user.image,
            donateParticipation: donateParticipation,
            donateValue: donateValue,
            helpCreated: helpCreated,
        }
        
        return res.status(httpStatus.ACCEPTED).json(helpObj);
    })

    //Rota para testes
    /*
    .get("/teste/teste", async (req: Request, res: Response ) => {
        const arrayUsers = await userRepository.getAll();
        return res.status(httpStatus.OK).json(arrayUsers);
    })
    */

export { userRouter };