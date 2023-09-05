import mongoose from "mongoose";

const url='mongodb://localhost:27017/rovikrondb';

export const connectDB= async ()=> {
    try{
       await mongoose.connect(url)
       console.log('DB connected')
    }catch(error){
        console.log(error)
    }    
};
