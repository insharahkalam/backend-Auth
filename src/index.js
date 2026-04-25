import dns from "dns"
dns.setServers(["8.8.8.8", "1.1.1.1"])
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from "./db/db.js"
import router from "./routes/AuthRoute.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB()

app.use('/api/v1/auth', router);


app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT} port`);
})