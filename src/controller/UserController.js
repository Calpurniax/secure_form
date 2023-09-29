import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';


//con bcrypt se puede encriptar la secret key del token y asi que sea más dificil desincriptar

export const createUser = async (req, res) => {
    const { email, username, name, lastname, password } = req.body
    if (!email || !username || !password || !name || !lastname) {
        return res.status(400).json({
            message: 'All fields are required'
        })

    } const userExists = await User.findOne({ email })
    if (userExists) return res.status(400).json({ message: 'user already exists' })
    try {
        const scriptPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            username,
            name,
            lastname,
            password: scriptPassword,
            role: 'user'
        })
        await newUser.save()
        res.status(201).json({
            message: 'user created',
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

export const getprofileById = async (req, res) => {

    const id = req.params.id
    if (!id) return res.status(400).json({ message: 'missing data' })
    try {
        const userFound = await User.findById(id)
        if (!userFound) res.status(404).json({ message: 'user not found' })
        return res.status(200).json({
            email: userFound.email,
            username: userFound.username,
            name: userFound.name,
            lastname: userFound.lastname,
            id:userFound._id
        })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getProfiles = async (req, res) => {
    try {
        const users = await User.find()
        const cleanUsers = users.map(each => {
            return ({
                id:each._id,
                role: each.role,
                email: each.email,
                username: each.username,
                name: each.name,
                lastname: each.lastname
            })
        })
        res.status(200).json(cleanUsers)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {

    const id = req.params.id
    if (!id) return res.status(400).json({ message: 'An id is required' })
    const { email, username, name, lastname, password } = req.body;
    if (!email && !username && !name && !lastname && !password) return res.status(400).json({ message: "New information is required" })
    if (password) {
        const scriptPassword = await bcrypt.hash(password, 10)
        req.body.password = scriptPassword
    }
    try {
        const userFound = await User.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true })
        if (!userFound) res.status(404).json({ message: 'User not found' })
        res.status(200).json({ message: 'Update correct' })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userFound = await User.findByIdAndDelete({ _id: id })
        if (!userFound) res.status(404).json({ message: 'Not user found with this id' });
        res.status(204).json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}