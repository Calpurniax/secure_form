import axios from 'axios';

const API ='http://localhost:3000/api'

export const loginRequest = user => axios.post(`${API}/login`, {email:user.login_email, password:user.login_password})

export const registerUser =user =>axios.post(`${API}/register`, {
    email:user.register_email, 
    username: user.register_name,
    password:user.register_password})