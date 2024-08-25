import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { validationToken, validationTokenRequest } from "../middlewares/auth-middleware"
import { helpRepository } from "../repositories/help-repositorie";
import { userRepository } from "../repositories/user-repositorie";

const helpRouter = Router();

helpRouter
    .get("/", async (req: Request, res: Response ) => {
        const arrayHelpObj = []
        
        const arrayHelp = await helpRepository.getAll()
        if(!arrayHelp){
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        for (let i = 0; i < arrayHelp.length; i++) {
            const user = await userRepository.getById(arrayHelp[i].author)
            if(!user){
                return res.sendStatus(httpStatus.BAD_REQUEST)
            }

            arrayHelpObj.push( {
                id: arrayHelp[i].id,
                title: arrayHelp[i].title,
                description: arrayHelp[i].description,
                type: arrayHelp[i].type,
                image: arrayHelp[i].image,
                author: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                },
                urgent: arrayHelp[i].urgent,
                supportes: arrayHelp[i].supportes,
            } )
        }

        return res.status(httpStatus.OK).json(arrayHelpObj);
    })

    .get("/:id", async (req: Request, res: Response ) => {
        const data = req.params.id

        const help = await helpRepository.getById(data)
        if(!help){
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        const user = await userRepository.getById(help.author)
        if(!user){
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        const helpObj = {
            id: help.id,
            title: help.title,
            description: help.description,
            type: help.type,
            gols: help.gols,
            image: help.image,
            author: {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
            },
            urgent: help.urgent,
            supportes: help.supportes,
        }

        return res.status(httpStatus.ACCEPTED).json(helpObj);
    })

    .use("/*", validationToken)
    .post("/", async (req: validationTokenRequest, res: Response ) => {
        const helpObj = req.userId
        const data = req.body

        const help = await helpRepository.created(data, helpObj)

        return res.status(httpStatus.ACCEPTED).json(help);
    })

export { helpRouter };
