import mongoose from "mongoose";

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
export default TodoModel;
