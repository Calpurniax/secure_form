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
    const {token_rovikron}= req.cookies
    if(!token_rovikron) return res.status(401).json({message:"no authorization"})
    const userFound = await checkToken(token_rovikron)   
    res.status(201).json({       
            email:userFound.email,
            role:userFound.role,
            username:userFound.username        
    })
};


