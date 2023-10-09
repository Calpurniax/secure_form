import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        validate:{
            validator:function(email){
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        },
        message: 'E-mail address is not valid'
    }
    },
    username: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        validate:{
            validator:function(username){
                return /^[a-zA-Z]+$/.test(username)                
            },
            message: "Only letters are allowed for this field"
        }
    },
    name:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function(name){
                return /^[a-zA-Z]+$/.test(name)                
            },
            message: "Only letters are allowed for this field"
        }
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function(lastname){
                return /^[a-zA-Z]+$/.test(lastname)                
            },
            message: "Only letters are allowed for this field"
        }
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: function(password) {
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
            },
            message: 'Password needs to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
          },
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