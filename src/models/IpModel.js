import mongoose from "mongoose";

const ipSchema =new mongoose.Schema({
    ipAdress:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const ipObject = mongoose.model('ipObject', ipSchema);
export default ipObject