import * as jwt from "jsonwebtoken"

interface JwtData {
    userId:string
}

const sing = (userId: JwtData): string | 'JWT_SECRET_NOT_FOUND' => {
    if(!process.env.JWT_SECRET) {
        return "JWT_SECRET_NOT_FOUND"
    }

    return jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: "24h"});
}

const verify = (token:string): JwtData | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN' => {
    if(!process.env.JWT_SECRET) {
        return "JWT_SECRET_NOT_FOUND"
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(typeof decoded === 'string'){
            return "INVALID_TOKEN"
        }

        return decoded as JwtData;
    } catch {
        return "INVALID_TOKEN"
    }

}

export const JWTService = {
    sing,
    verify
}