import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import {createAccessToken} from "../lib/createToken.js";


export const createUser = async(req,res)=>{
    console.log(req.body)
    const {email, username, password}=req.body
    if(!email || !username || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }try{
        const scriptPassword= await bcrypt.hash(password, 10);
        const newUser = new User ({
            email,
            username,
            password: scriptPassword
        })
        await newUser.save()
        const token = await createAccessToken({id:newUser._id})
        res.cookie('token', token);
        res.status(201).json({
            message:"user created",
            email,
            username
        })
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}