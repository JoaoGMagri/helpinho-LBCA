import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { db } from "../config/database";
import { Help } from "../config/type";

const helpRouter = Router();

helpRouter
    .get("/", async (req: Request, res: Response ) => {
        let data:any = [...db.help]
        return res.status(httpStatus.CREATED).json(data);
    })

export { helpRouter };