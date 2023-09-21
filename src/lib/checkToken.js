import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";
import User from "../models/UserModel.js";

export const checkToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.verify(payload, secretKey, async (error, decodeToken) => {
            if (error) reject(error)
            const userFound = await User.findById(decodeToken.id)
            if (!userFound) return res.status(498).json({ message: "invalid token" })
            if (decodeToken.role !== userFound.role) return res.status(401)
            resolve(userFound)
        })
    })
}



