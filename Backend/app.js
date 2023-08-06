// All imports
import Express from "express";
import dotenv from "dotenv"
import postRouter from "./routes/postRoutes.js"
import userRouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";


//env file path
dotenv.config({
    path: "./config/config.env",
});
  

const app = Express();

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cookieParser())

//routes

app.use("/api/v1", postRouter)
app.use("/api/v1",userRouter)



export default app;