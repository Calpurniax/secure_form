import mongoose from "mongoose";

const contactDataSchema = new mongoose.Schema({
    email: {type: String},
    name: {type: String},
},{
    timestamps:true
})

const contactData =mongoose.model('contactData', contactDataSchema)
export default contactData