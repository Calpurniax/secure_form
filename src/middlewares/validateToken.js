import jwt from "jsonwebtoken";
import {secretKey} from "../config.js"

export const authRequired =(req,res, next)=>{
    const {token}= req.cookies
    if(!token) return res.status(401).json({message:"no authorization"})
    jwt.verify(token, secretKey,(error, decodeToken)=>{
        if(error) return res.status(498).json({message:"invalid token"})
        req.user= decodeToken.id
        next();
    })    
}