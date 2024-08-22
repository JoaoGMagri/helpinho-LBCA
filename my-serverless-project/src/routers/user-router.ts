import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { db } from "../config/database";
import { User } from "../config/type";

const userRouter = Router();

userRouter
    .post("/", async (req: Request, res: Response ) => {
        const data = req.body;

        db.user.push(new User(data));
        console.log(db.user)
        return res.status(httpStatus.CREATED).json(data);
    })

    .get("/teste", async (req: Request, res: Response ) => {
        let data:any = {...db.user}
        return res.status(httpStatus.CREATED).json(data);
    })


export { userRouter };