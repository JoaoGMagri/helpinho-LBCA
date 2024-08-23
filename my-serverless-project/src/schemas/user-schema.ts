import joi, { date } from "joi";
import { User } from "../config/type";

export const userSchema = joi.object<UserPararm>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    date: joi.string().required(),
    number: joi.string().alphanum().required(),
})

export type UserPararm = Pick<User, "name" | "email" | "password" | "date" | "number">;