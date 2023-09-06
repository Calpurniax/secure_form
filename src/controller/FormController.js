import ContactForm from "../models/FormModel.js";


export const createForm = async (req, res) =>{
    console.log (req.body)
    const {email, name, subject, message} = req.body
    if (!email || !name || !subject || !message ){
        return res.status(400).json ({
            message: "All fields are required"})
    }
    try {
        const form = new ContactForm(req.body)
        await form.save();
        res.status(201).json(form)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};