import express, { json } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routers/user-router";

dotenv.config()
const app = express();

app
    .use(json())
    .get('/health', (_, res) => { return res.send("funfo") })
    .use("/user", userRouter)

const port = 4000
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});