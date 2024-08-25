import {Response, Router } from "express";
import httpStatus from "http-status";
import { validationToken, validationTokenRequest } from "../middlewares/auth-middleware";
import { donationRepository } from "../repositories/donate-repositorie";
import { helpRepository } from "../repositories/help-repositorie";

const donateRouter = Router();

donateRouter
    .use("/*", validationToken)
    //Cria uma nova doação
    .post("/", async (req: validationTokenRequest, res: Response ) => {
        const userId = req.userId
        const data = req.body

        const helpExists = await helpRepository.getById(data.helpId)
        if(!helpExists){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        const donate = await donationRepository.created(data, userId)

        return res.status(httpStatus.CREATED).json(donate);
    })

export { donateRouter };