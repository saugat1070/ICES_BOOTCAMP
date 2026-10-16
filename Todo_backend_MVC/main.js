import express from "express";
import { Env } from "./src/config/env.config.js";
import connectDb from "./src/config/db.config.js";

const app = express();

app.use(express.json());



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