import axios from './axios';

export const loginRequest = user => axios.post('/login', { email: user.login_email, password: user.login_password })
export const logoutRequest = cookie => axios.post('/logout', cookie)

export const verifyTokenRequest = cookie => axios.get('/verify', cookie)

export const registerUser = user => axios.post('/register', {
    email: user.register_email,
    username: user.register_username,
    name: user.register_name,
    lastname: user.register_lastname,
    password: user.register_password
})

export const userByIdRequest = id => axios.get(`/profile/${id}`);
export const deleteUserRequest = id => axios.delete(`/profile/${id}`);

export const sendMessage = message => axios.post('/form', {
    email: message.contact_email,
    name: message.contact_name,
    subject: message.contact_subject,
    message: message.contact_message
})

export const messagesRequest = () => axios.get('/form')
export const allUsersRequest = () => axios.get('/profiles')



