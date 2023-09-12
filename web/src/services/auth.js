import axios from 'axios';

const API = 'http://localhost:3000/api'

export const loginRequest = user => axios.post(`${API}/login`, { email: user.login_email, password: user.login_password })

export const registerUser = user => axios.post(`${API}/register`, {
    email: user.register_email,
    username: user.register_username,
    name: user.register_name,
    lastname:user.register_lastname,
    password: user.register_password
   
})

export const sendMessage = message => axios.post(`${API}/form`, {
    email: message.contact_email,
    name: message.contact_name,
    subject: message.contact_subject,
    message:message.contact_message
})