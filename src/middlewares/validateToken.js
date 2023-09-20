import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import {secretKey} from "../config.js"

export const authRequired = async (req,res, next)=>{   
    const {token_rovikron}= req.cookies
    console.log({token_rovikron})
    if(!token_rovikron) return res.status(401).json({message:"no authorization"})
    jwt.verify(token_rovikron, secretKey, async (error, decodeToken)=>{
        if(error) return res.status(498).json({message:"invalid token"}) 
        const userFound=await User.findById(decodeToken.id)  
        if(!userFound) return res.status(498).json({message:"invalid token"})     
        req.user= {
            id:decodeToken.id,
            role:decodeToken.role,
            iat:decodeToken.iat,
            exp:decodeToken.exp}       
        next();
    })    
}

//devuelve un objeto con el token, que es el rol el id del usuario 
//y las fechas de creación
//y expiración