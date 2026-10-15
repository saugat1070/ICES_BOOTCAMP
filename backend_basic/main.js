const express = require("express"); // import express from "express";

const app = express();

// BASE_URL: http://localhost:3000 + route_name

// function RICBlock(){}// normal function
// function RICBlock(req,res){} // controller function or method or handler

// request --> timro fronted bata aako data lai carry
// response --> timro backend bata fronted ma pathaune data lai carry

// controller function

// firstArgument: route_name
// secondArgument: controller function

app.get("/health",(req,res)=>{
  res.json({
    message: "Still Alive"
  })
})

app.get("/search", (req,res)=>{
  console.log("Request received at params: ", req.query);
  console.log("Request header: ",req.ip )
  // res.json({
  //   message: `i got ${req.query} object from frontend`
  // })
})

// client --> server --> request
// server --> client
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Server is running at port: 3000");
}); // express server chai timro computer ko port 3000

// type-1: commonjs
// type-2: module

// request_url --> base_url + route_name
// js --> object file

// {message:"Hello World"}
// {
//"message": "Hello World"
//}

// dyanmic variable chai route ma pathauna milcha --> :name  

// Cannot GET /saugat -- eyo chai route ho hae vanera