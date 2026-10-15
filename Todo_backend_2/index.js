import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const databaseUrl = process.env.MONGODB_CONNECTION_STRING;

const app = express();

app.use(express.json()); // --> to parse the incoming request body as JSON

function connectDb(){
    mongoose.connect(databaseUrl);
    console.log("Database connected successfully");
}
connectDb();

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    notes:{
        type: String,
    }
},{
    timestamps: true // --> createdAt and updatedAt fields will be automatically added to the schema
})//

// Schema --> model
const TodoModel = mongoose.model("todo", todoSchema);

// url --> base_url + route_name
// base_url --> http://localhost:3000

// await --> async function vitra hunu parcha
app.post("/todo", async (req,res)=>{
    // client(fronted) will send the data to the server
    const data = req.body;
    // if not title and not notes then excute if condition
    if(!data.title || !data.notes ){ // validate data 
        return res.status(400).json({message: "Title and notes are required"});
    }
    
    // applying bussiness logic
    const updateTitle = `WRC: ${data.title}`;

    // save the data to the database
    const todo = await TodoModel.create({
        title: updateTitle,
        notes: data.notes
    })

    if(!todo){ // {} || null
        return res.status(500).json({message: "Internal server error"});
    }
    // send the response to the client(frontend)
    return res.status(201).json({
        message: "Todo created successfully",
        data: todo
    })
})

app.get("/todo", async (req,res)=>{ 
   const todo = await TodoModel.find(); // [{},{},{}] || []
   return res.status(200).json({
    message: "Todo fetched successfully",
    data: todo
   })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




