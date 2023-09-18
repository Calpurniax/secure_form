import User from "../models/UserModel.js";


export const adminRequired = async (req, res, next) => {    
    const userFound = await User.findById(req.user.id)
    if (!userFound) res.status(401).json({ message: "no authorization" })
    const roleFound = userFound.role;
    if (roleFound !== req.user.role) res.status(401).json({ message: "no authorization" })
    if (roleFound === "admin" && req.user.role === "admin") next()
    else return res.status(401).json({ message: "no authorization" })
}