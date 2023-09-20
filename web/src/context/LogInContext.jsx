import { createContext, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { loginRequest, verifyTokenRequest } from "../services/auth";


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

    async function checkLogin(){
        try{
            console.log('probando')
            verifyTokenRequest(cookieToken)

        }catch(error){console.log(error)
            
        }
    }

    useEffect(()=>{
        const token=cookies.get('token_rovikron')
        console.log(token)     
        if(!token){
            setIsLoggedIn(false)
            setUser(null)
            return
        } 
        setCookieToken(token.token_rovikron)
        checkLogin(cookieToken)
        
    },[])

    // useEffect(() => {
    //     async function checkLogin() {            
    //         const cookies = cookies.get()
    //        // setCookieToken(cookies)
    //         if (!cookies) {
    //             setIsLoggedIn(false)
    //             setUser(null)
    //             setIsAdmin(false)
    //             return
    //         }
    //         try {
    //             setCookieToken(cookies)
    //             const res = await verifyTokenRequest(cookieToken)
    //             console.log(res)
    //             if (res.status !== 201) {
    //                 console.log("no autorizado")
    //                 setIsLoggedIn(false) 
    //                 setUser(null)
    //                 return
    //             } 
    //             setIsLoggedIn(true)
    //             setUser(res.data)
    //         } catch (error) {
    //             setIsLoggedIn(false)
    //             setIsAdmin(false)
    //             setUser(null)
    //         }
    //     }
    //     checkLogin()
    // }, [])

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
    return (
        <LogInContext.Provider value={{ logInFunction, isLoggedIn, isAdmin, user, logInError }}>
            {children}
        </LogInContext.Provider>
    )
}