import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import {createLoginToken} from "../lib/createToken.js";

//crear token solo al login
//poner rol en la creacion del usuario y q sea parte del login
//q solo se creen usuarios, no admin (mongoose) el admin se crea directamente en el compass
//con bcrypt se puede encriptar la secret key del token y asi que sea más dificil desincriptar
//llevarte la secret key fuera para reutilizarla cuando sea, será la misma para todos


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