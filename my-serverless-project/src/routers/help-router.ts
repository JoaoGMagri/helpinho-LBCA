import { Request, Response, Router } from "express";
import httpStatus from "http-status";
import { db } from "../config/database";

const helpRouter = Router();

helpRouter
    .get("/", async (req: Request, res: Response ) => {
        let data:any = [...db.help]
        return res.status(httpStatus.OK).json(data);
    })

export { helpRouter };