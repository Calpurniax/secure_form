import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";


//crear token solo al login
//poner rol en la creacion del usuario y q sea parte del login
//q solo se creen usuarios, no admin (mongoose) el admin se crea directamente en el compass
//con bcrypt se puede encriptar la secret key del token y asi que sea más dificil desincriptar
//llevarte la secret key fuera para reutilizarla cuando sea, será la misma para todos


export const createUser = async (req, res) => {
    console.log(req.body)
    const { email, username, name, lastname, password } = req.body
    if (!email || !username || !password || !name || !lastname) {
        return res.status(400).json({
            message: "All fields are required"
        })
    } try {
        const scriptPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            username,
            name,
            lastname,
            password: scriptPassword,
            role: "user"
        })
        await newUser.save()
        res.status(201).json({
            message: "user created",
            email,
            username,
            name,
            lastname
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

export const getprofileByID = async (req, res) => {
    const userFound = await User.findById(req.user)
    if (!userFound) return res.status(400).json({ message: "user not found" })

    return res.json({
        email: userFound.email,
        name: userFound.username,
        created: userFound.createdAt
    })
}

export const getProfiles = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { email, username, name, lastname, password, role } = req.body;
    if (!email && !username && !name && !lastname && !password && !role) return res.status(400).json({ message: "New information is required"})
    try {
        const userFound = await User.find({ email })
        if (!userFound) res.status(404).json({ message: "user not found" })
        const newForm = await User.findByIdAndUpdate(userFound._id, req.body, { new: true })
        res.status(200).json(newForm)

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const deleteUser = async (req, res) =>{
    try {
        const {email} =req.body;
        const userFound = await User.find({ email })
        if(!userFound) res.status(404).json({ message: "Not user found with this email" });
        const user = await User.deleteOne(userFound._id);         
         res.status(200).json({ message: "User delete" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}