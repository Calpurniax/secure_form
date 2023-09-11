import {createContext, useContext, useState} from 'react';
import { loginRequest } from "../services/auth";

export const LogInContext =createContext ();
export const useLoginContext=()=>{

    const context =useContext(LogInContext);
    if(!context)throw new Error ("You need to sign up")
    return context;
}

export const LogInProvider =({children})=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const logInFunction =async(user)=>{
        try{
            console.log(values)
            const res= await loginRequest(user);
            setIsLoggedIn(true)
        } catch (error) {console.log(error)}        
    }
    
    return(
        <LogInContext.Provider value={{}}>
            {children}
        </LogInContext.Provider>
    )
}