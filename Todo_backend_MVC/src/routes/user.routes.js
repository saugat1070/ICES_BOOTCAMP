import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin","user","super-admin"],
        default: "user"
    }
},{
    timestams: true
})

const UserModel = mongoose.model("user", userSchema);
export default UserModel;