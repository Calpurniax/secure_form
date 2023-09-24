import axios from './axios';

export const messagesRequest = () => axios.get('/form')

export const deleteMessageRequest = id => axios.delete(`/form/${id}`)

export const sendMessage = message => axios.post('/form', {
    email: message.contact_email,
    name: message.contact_name,
    subject: message.contact_subject,
    message: message.contact_message
})


export const getMessages = async () => {
    try {
        const response = await messagesRequest();
        return response.data.messages
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteMessage = async (id) => {
    try {
        const response = await deleteMessageRequest(id);
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}