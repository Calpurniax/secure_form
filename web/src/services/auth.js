import axios from './axios';

export const loginRequest = user => axios.post('/login', { email: user.login_email, password: user.login_password })

export const verifyTokenRequest = ()=> axios.get('/verify')

export const registerUser = user => axios.post('/register', {
    email: user.register_email,
    username: user.register_username,
    name: user.register_name,
    lastname:user.register_lastname,
    password: user.register_password
   
})

export const sendMessage = message => axios.post('/form', {
    email: message.contact_email,
    name: message.contact_name,
    subject: message.contact_subject,
    message:message.contact_message
})

export const getProfile = value => axios.get('/register',{value});