import express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.get('/', (_, res) => {
    return res.send("funfo")
})

const port = 4000
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});