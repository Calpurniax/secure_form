import {createContext, useContext, useState} from 'react';
import { loginRequest } from "../services/auth";

export const LogInContext =createContext ();
export const useLoginContext=()=>{

    const context =useContext(LogInContext);
    if(!context)throw new Error ("useLogin must be used within an LoginProvider")
    return context;
}

export const LogInProvider = ({children})=>{

    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [user, setUser]=useState(null);
    const [logInError, setLogInError]= useState(null);    

    const logInFunction =async(user)=>{
        
        try{
            console.log(user)
            const res= await loginRequest(user);
            setIsLoggedIn(true)
            setUser(res)            
            return res
            
        } catch (error)
            {
                setLogInError(error.response.data.message)
                console.log(error)
            }               
    }    
    return(
        <LogInContext.Provider value={{logInFunction, isLoggedIn, user, logInError}}>
            {children}
        </LogInContext.Provider>
    )
}