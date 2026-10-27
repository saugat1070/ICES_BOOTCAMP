import TodoModel from "../models/todo.model.js";

export async function createTodo(req, res) {  // --> controller or handler function
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
}

export async function getTodos(req, res) {
    const todo = await TodoModel.find(); // [{},{},{}] || []
   return res.status(200).json({
    message: "Todo fetched successfully",
    data: todo
   })
}

export async function updateTodo(req, res) {
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

}

export async function deleteTodo(req, res){
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

}