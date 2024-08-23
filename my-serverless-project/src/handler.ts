import ServerlessHttp from "serverless-http";
import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routers/user-router";
import { helpRouter } from "./routers/help-router";
import { authRouter } from "./routers/auth-router";

dotenv.config();
const app = express();

app
    .use(cors())
    .use(json())
    .get("/health", (_req, res) => res => {
        console.log("aqui")
        res.send("ok") 
    } )

    .use("/user", userRouter)
    .use("/help", helpRouter)
    .use("/auth", authRouter)

    
/* 
const port = 4000
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
}); 
*/

export const handler = ServerlessHttp(app);