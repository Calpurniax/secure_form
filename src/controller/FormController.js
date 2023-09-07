import ContactForm from "../models/FormModel.js";
import User from "../models/UserModel.js";


export const createForm = async (req, res) => {
    console.log(req.body)
    const { email, name, subject, message } = req.body
    if (!email || !name || !subject || !message) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const form = new ContactForm(req.body)
        await form.save();
        res.status(201).json(form)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export const getForm = async (req, res) => {
    try {
        const userFound = await User.findById(req.user)
        if (!userFound) return res.status(400).json({ message: "user not found" })
        const forms = await ContactForm.find({ email: userFound.email })
        if (!forms) return res.status(404).json({ message: "no messages for that user" })
        return res.status(200).json({ messages: forms })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
