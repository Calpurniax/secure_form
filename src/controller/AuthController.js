import { createLoginToken } from "../lib/createToken.js";
import { checkToken } from "../lib/checkToken.js";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";


export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    } 
    try {
        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400).json({
            message: "Credentials are not valid."
        });
        const passwordMatch = await bcrypt.compare(password, userFound.password)
        if (!passwordMatch) return res.status(400).json({
            message: "Credentials are not valid."
        })
        const token = await createLoginToken({ id: userFound._id, role: userFound.role })
        res.cookie("token_rovikron", token)
        res.status(201).json({           
            email: userFound.email,
            username: userFound.username,
            role:userFound.role
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

export const logout = (req, res) => {
    res.cookie("token_rovikron", "", { expires: new Date(0) })
    return res.status(200).json({ message: "log out ok" })
};

export const checkLogin=async (req, res)=>{
    console.log(req.cookies)
    const {token_rovikron}= req.cookies
    if(!token_rovikron) return res.status(401).json({message:"no authorization"})
    const decodeToken = await checkToken(token_rovikron)
    res.status(201).json({
        user:{
            email:decodeToken.email,
            role:decodeToken.role,
            username:decodeToken.username
        }
    })
};



    // jwt.verify(token_rovikron, secretKey, async (error, decodeToken)=>{
    //     if(error) return res.status(498).json({message:"invalid token"}) 
    //     const userFound=await User.findById(decodeToken.id)  
    //     if(!userFound) return res.status(498).json({message:"invalid token"})   
    //     res.status(201)
    //.json({userFound})  
        // return res.user= {
        //     id:decodeToken.id,
        //     role:decodeToken.role,
        //     iat:decodeToken.iat,
        //     exp:decodeToken.exp} 
//          })
        
// }

// export const authRequired = async (req,res, next)=>{   
//     const {token_rovikron}= req.cookies
//     console.log({token_rovikron})
//     if(!token_rovikron) return res.status(401).json({message:"no authorization"})
//     jwt.verify(token_rovikron, secretKey, async (error, decodeToken)=>{
//         if(error) return res.status(498).json({message:"invalid token"}) 
//         const userFound=await User.findById(decodeToken.id)  
//         if(!userFound) return res.status(498).json({message:"invalid token"})     
//         req.user= {
//             id:decodeToken.id,
//             role:decodeToken.role,
//             iat:decodeToken.iat,
//             exp:decodeToken.exp}       
//         next();
//     })    
// }