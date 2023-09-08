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
            password: scriptPassword,
            role:"user"
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
};

export const login = async(req,res)=>{    
    console.log(req.body)   
    const {email, password}=req.body
    if(!email || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }try{
        const userFound = await User.findOne({email})
        
        if(!userFound) return res.status(400).json({
            message:"Credentials are not valid."
        });
        const passwordMatch= await bcrypt.compare(password, userFound.password)
        if(!passwordMatch) return res.status(400).json({
        message:"Credentials are not valid."})
        const token = await createLoginToken({id:userFound._id})
        res.cookie("token", token)
        res.status(201).json({
            message:"user log in",
            email,
            nameFound: userFound.username            
        })
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
};

export const logout = (req,res)=>{
    res.cookie("token", "", {expires: new Date (0)})
    return res.status(200).json({message:"log out ok"})
};

export const profile= async(req,res)=>{
    const userFound = await User.findById(req.user)
    if(!userFound) return res.status(400).json({message:"user not found"})

    return res.json({
        email: userFound.email,
        name: userFound.username,
        created: userFound.createdAt
    })
}