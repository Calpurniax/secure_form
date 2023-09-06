import mongoose from "mongoose";

const url= "mongodb://127.0.0.1:27017/rovikron";

const dbConnect = async () => {
  try{
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then (()=>{
      console.log('mongoDB connected')
    }).catch ((error)=>{
      console.error("error MongoDB",error)
    })
  }catch (error){
    console.error("error MongoDB",error)
    process.exit(1)
  }
};
export default dbConnect;

