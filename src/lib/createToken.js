import jwt from "jsonwebtoken";


export function createAccessToken(payload){
    const secretKey="tx9453)%";
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