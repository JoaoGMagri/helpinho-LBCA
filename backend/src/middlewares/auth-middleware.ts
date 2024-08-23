import { NextFunction, Request, Response } from "express";
import { JWTService } from "../services/JWT-service";
import httpStatus from "http-status";

export type validationTokenRequest = Request & JwtData;

interface JwtData {
  userId: string;
};

export async function validationToken(req: validationTokenRequest, res: Response, next: NextFunction) {

    const token = req.header("setHeaders");
    if (!token) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    const userValid = JWTService.verify(token) as JwtData

    if( !userValid){
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    req.userId = userValid.userId;
    next();
    
}