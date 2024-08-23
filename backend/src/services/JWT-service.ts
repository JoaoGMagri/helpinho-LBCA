import * as jwt from "jsonwebtoken"

interface JwtData {
    userId:string
}

const sing = (userId: JwtData): string | undefined => {
    if(!process.env.JWT_SECRET) {
        return undefined
    }

    return jwt.sign(userId, process.env.JWT_SECRET);
}

const verify = (token:string): JwtData | undefined => {
    if(!process.env.JWT_SECRET) {
        return undefined
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(typeof decoded === 'string'){
            return undefined
        }

        return decoded as JwtData;
    } catch {
        return undefined
    }

}

export const JWTService = {
    sing,
    verify
}