import axios from 'axios';

const API ='http://localhost:3000/api'

export const login = user => axios.post(`${API}/login`, {email:user.login_email, password:user.login_password})