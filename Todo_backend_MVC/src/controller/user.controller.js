import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
/* 
--> user create
  - user bata email,fullName,password line
  - validate garne
  - email exists cha ki chaina vanera db maa check garne
  - password chai hash garne
  - db maa save garne
  - user created successfully vanera response pani gayo

*/


//--> deconstruction
export async function createUser(req, res){
    const {email,fullName,password} = req.body;
    if(!email || !fullName || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    const existingUser = await UserModel.findOne({email: email})
    if(existingUser){ // E11000 duplicate key error --> prevent duplicate email
        return res.status(400).json({message: "User already exists, please try with another email"});
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await UserModel.create({
        email: email,
        fullName: fullName,
        password: hashedPassword
    });
    if(!user){
        return res.status(500).json({message: "Internal server error"});
    }
    return res.status(201).json({
        message: "User created successfully",
    })


}