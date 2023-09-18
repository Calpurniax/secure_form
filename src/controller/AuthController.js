import { createLoginToken } from "../lib/createToken.js";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })

    } if (typeOf(email) !== String || typeOf(password) !== String) return res.status(400).json({
        message: "Credentials not valid"
    })
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
        res.cookie("token", token, { httpOnly: true })
        res.status(201).json({
            message: "user log in",
            email,
            name: userFound.username
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) })
    return res.status(200).json({ message: "log out ok" })
};