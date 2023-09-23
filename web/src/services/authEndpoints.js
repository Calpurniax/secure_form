import axios from './axios';

export const loginRequest = user => axios.post('/login', { 
    email: user.login_email, 
    password: user.login_password 
})

export const logoutRequest = cookie => axios.post('/logout', cookie)

export const verifyTokenRequest = cookie => axios.get('/verify', cookie)








