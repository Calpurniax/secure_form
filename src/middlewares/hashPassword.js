import bcrypt from 'bcryptjs';

export const encryptPassword= async (password)=>{
   try{ 
    const scriptPassword = await bcrypt.hash(password, 10)
    return scriptPassword
   } 
   catch (error) {
    console.log(error);
  }
}


