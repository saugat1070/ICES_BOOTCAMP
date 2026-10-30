import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
    const regexExpression = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/  ; // email: saugatgiri@gmail.com --> 2 or 3
    if(regexExpression.test(email) === false){
        return res.status(400).json({message: "Invalid email format"});
    }
    if(!email || !fullName || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    const existingUser = await UserModel.findOne({email: email})
    if(existingUser){ // E11000 duplicate key error --> prevent duplicate email
        return res.status(400).json({message: "User already exists, please try with another email"});
    }
    // const salt = bcrypt.genSalt(10);
    // const hash = bcrypt.hash(password, salt)
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

/* 
@ Login Feature
 - user bata email, password line
 - validate garum
 - email exists cha garcha kii nai vanera check garne
 - user le provide gareko password lai stored hashed password sanga compare garne
 - mero credential ko jwt token (encrypted credential) generate garxu
 - match bhayo vane login successful vanera with jwt token  response pathaune,navyhe error response

*/
// fronted: email: saugatgiri@gmail.com and password: saugat1234
export async function loginUser(req, res){
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "please provide your email and password"});
    }
    const user = await UserModel.findOne({email: email});
    if(!user){
        return res.status(404).json({message: "User not found, please register first"});
    }
    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if(!isPasswordMatch){
        return res.status(401).json({message: "Invalid password, please try again"});
    }
    const payload = {
        id : user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role
    }
    const token = jwt.sign(payload, "fkalhdfahdfkjadjfkhlklkdfk", {expiresIn: "3d"});
    return res.status(200).json({
        message: "Login successful",
        access_token: token
    })
}