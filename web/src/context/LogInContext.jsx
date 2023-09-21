import { createContext, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { loginRequest, logoutRequest, verifyTokenRequest } from "../services/auth";


export const LogInContext = createContext();
export const useLoginContext = () => {

    const context = useContext(LogInContext);
    if (!context) throw new Error("useLogin must be used within an LoginProvider")
    return context;
}

export const LogInProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);
    const [logInError, setLogInError] = useState(null);
    const [cookieToken, setCookieToken] = useState (null)
    const [loading, setLoading] = useState(true)

    async function checkLogin(){
        try{
            console.log('probando')
            const res = await verifyTokenRequest(cookieToken)
            if(!res.data){
                setIsLoggedIn(false) 
                setUser(null)
                setLoading(false)
                return
            }
            console.log(res.data)
            setIsLoggedIn(true) 
            setUser(res.data)
            setLoading(false)
            if(res.data.role==="admin")setIsAdmin(true)

        }catch(error){
            console.log(error)
            setIsLoggedIn(false) 
            setUser(null)
            setLoading(false)
        }
    }

    useEffect(()=>{
        const token=cookies.get()
        console.log(token)     
        if(!token){
            setIsLoggedIn(false)
            setUser(null)
            setLoading(false)
            return
        } 
        setCookieToken(token)
        checkLogin()
        
    },[])

     const logInFunction = async (user) => {

        try {
            const res = await loginRequest(user);
            console.log(res)
            if (res.data.role === "admin") {
                setIsAdmin(true)
            }
            setIsLoggedIn(true)
            setUser(res.data)
            return res

        } catch (error) {
            setLogInError(error.response.data.message)
            console.log(error)
        }
    }
    const logoutFunction = async (cookieToken)=>{
        try {
            const res = await logoutRequest(cookieToken);           
            setIsAdmin(false)
            setCookieToken(null)
            setIsLoggedIn(false)
            setUser(null)
            return res

        } catch (error) {
            setLogInError(error.response.data.message)
            console.log(error)
        }
    }
    return (
        <LogInContext.Provider value={{ logInFunction, logoutFunction, isLoggedIn, isAdmin, user, logInError, cookieToken, loading }}>
            {children}
        </LogInContext.Provider>
    )
}