import axios from './axios';

export const messagesRequest = () => axios.get('/form')
export const allUsersRequest = () => axios.get('/profiles')

export const sendMessage = message => axios.post('/form', {
    email: message.contact_email,
    name: message.contact_name,
    subject: message.contact_subject,
    message: message.contact_message
})

export const registerUser = user => axios.post('/register', {
    email: user.register_email,
    username: user.register_username,
    name: user.register_name,
    lastname: user.register_lastname,
    password: user.register_password
})

export const getUsers = async () => {
    try {
        const response = await allUsersRequest();
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getMessages = async () => {
    try {
        const response = await messagesRequest();
        return response.data.messages
    } catch (error) {
        console.log(error)
        return error
    }
}