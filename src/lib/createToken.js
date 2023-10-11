import jwt from "jsonwebtoken";
import {secretKey} from "../.env.js"

export function createLoginToken(payload){    
    return new Promise ((resolve, reject)=>{
        jwt.sign(        
            payload,        
            secretKey,
            {
                expiresIn:"1d",
            },
            (error, token)=>{
                if(error)reject (error)
                resolve(token)
            }
        )
    })
    
}