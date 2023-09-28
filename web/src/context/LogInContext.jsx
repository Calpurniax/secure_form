import { createContext, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { loginRequest, logoutRequest, verifyTokenRequest } from "../services/authEndpoints";
import {updateUserRequest} from '../services/userEndpoints';


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
    const [cookieToken, setCookieToken] = useState(null)
    const [loading, setLoading] = useState(true)

    async function checkLogin() {
        try {
            const res = await verifyTokenRequest(cookieToken)
            if (!res.data) {
                setIsLoggedIn(false)
                setUser(null)
                setLoading(false)
                return
            }           
            setIsLoggedIn(true)
            setUser(res.data)
            setLoading(false)
            if (res.data.role === "admin") setIsAdmin(true)

        } catch (error) {
            setIsLoggedIn(false)
            setUser(null)
            setLoading(false)
        }
    }

    useEffect(() => {
        const token = cookies.get()
        if (!token) {
            setIsLoggedIn(false)
            setUser(null)
            setLoading(false)
            return
        }
        setCookieToken(token)
        checkLogin()
    }, [])

    const logInFunction = async (user) => {

        try {
            const res = await loginRequest(user);
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
    const logoutFunction = async (cookieToken) => {
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
    const updateOwnProfile = async (id, user)=>{
        function checkUser(user) {
            for (var eachProp in user) {
              if (user[eachProp] === '') {
                delete user[eachProp];
              }
            }
            return user;
          }
          const cleanUser = checkUser(user);  
        try{
            const res = await updateUserRequest(cleanUser, id)
            return res
        } catch (error) {           
            console.log(error)
            return error
        }
        
    }
    return (
        <LogInContext.Provider value={{ logInFunction, updateOwnProfile, logoutFunction, isLoggedIn, isAdmin, user, logInError, cookieToken, loading }}>
            {children}
        </LogInContext.Provider>
    )
}