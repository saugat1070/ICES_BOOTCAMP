import mongoose from "mongoose";
import { Env } from "./env.config.js";

function connectDb(){
    mongoose.connect(Env.dbConnectionString)
    console.log("Database connected Successfully")
    mongoose.connection.on("disconnected",()=>{  // --> event listener for disconnection
        console.log("MongoDB disconnected");
    })
    
    mongoose.connection.on("connected",()=>{
        console.log("MongoDB connected");
    })
}

export default connectDb;


