import express from "express";
import { Env } from "./src/config/env.config.js";
import connectDb from "./src/config/db.config.js";
import todoRoutes from "./src/routes/todo.routes.js";
import { sampleMiddleware } from "./src/middleware/sample.middleware.js";
import userRouter from "./src/routes/user.routes.js";

const app = express();

app.use(express.json()); // default middleware to parse the incoming request body as JSON
// Global middleware
app.use(sampleMiddleware); // --> middleware function

app.use("/todo",todoRoutes)   // --> route_name + route_handler
app.use("/user",userRouter)   // --> route_name + route_handler



function startServer(){
    connectDb();
    app.listen(Env.port, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`Server is running on port ${Env.port}`);
    })
}


startServer();