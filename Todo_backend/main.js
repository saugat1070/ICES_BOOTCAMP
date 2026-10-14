// commonjs --> require
// es module --> import express from "express";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const app = express();

const dbConnectionString = process.env.MONGODB_CONNECTION_STRING;

function connectDb(){
    mongoose.connect(dbConnectionString);
    console.log("Database connected successfully");
}

connectDb();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");

}) // port_number + callback function