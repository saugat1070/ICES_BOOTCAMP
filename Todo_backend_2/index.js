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

// document ko id --> req.params
// k kura alter garne --> req.body

app.patch("/todo/:id", async (req,res)=>{
// client will send the data to the server
const data = req.body;
const todoId = req.params;

// alter garne data chai db maa exists garcha kii nai vanera check garnu paryo
// const todo = await TodoModel.findByIdAndUpdate(todoId.id,{
//     notes: data.notes
// },
// {returnDocument: "after"}
// ); // {} || null

const todo = await TodoModel.findOneAndUpdate(
{
    _id: todoId.id
},
{
 notes: data.notes
},
{
    returnDocument: "after"
}
) 
// if not exists then return 404 error
if(!todo){
    return res.status(404).json({message: "Todo not found"});
}
// if exists then update the data

// then send a response to the client
return res.status(200).json({
    message: "Todo update successfully",
    data: todo
})
}) // update the data

app.delete("/todo/:id", async (req, res)=>{
    const todoId = req.params;

    // const todo = await TodoModel.findByIdAndDelete(todoId.id); // {} || null
    const todo = await TodoModel.findOneAndDelete({
        _id: todoId.id
    });
    if(!todo){
        return res.status(404).json({message: "Todo not found"});
    }
    return res.status(200).json({
        message: "Todo deleted successfully",
    })
})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




