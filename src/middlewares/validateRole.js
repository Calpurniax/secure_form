import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { secretKey } from "../config.js"

// export const authRequired = (req, res, next) => {
//     const { token } = req.cookies
//     if (!token) return res.status(401).json({ message: "no authorization" })
//     jwt.verify(token, secretKey, (error, decodeToken) => {
//         if (error) return res.status(498).json({ message: "invalid token" })
//         const userFound = User.findById(decodeToken.id)
//         if (!userFound) return res.status(498).json({ message: "invalid token" })
//         req.user = { decodeToken }
//         next();
//     })
// }

export const adminRequired = async (req, res, next) => {    
    const userFound = await User.findById(req.user.id)
    if (!userFound) res.status(401).json({ message: "no authorization" })
    const roleFound = userFound.role;
    if (roleFound !== req.user.role) res.status(401).json({ message: "no authorization" })
    if (roleFound === "admin" && req.user.role === "admin") next()
    else return res.status(401).json({ message: "no authorization" })
}