import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    username: {
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user", "admin"]
    }
},{
    timestamps:true
})

const User =mongoose.model('User', userSchema);
export default User;