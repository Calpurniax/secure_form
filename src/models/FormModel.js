import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
    email: {type: String},
    name: {type: String},
    subject: {type: String},
    message: {type: String}
},{
    timestamps:true
}
);

const ContactForm = mongoose.model('Form', contactFormSchema);

export default ContactForm;