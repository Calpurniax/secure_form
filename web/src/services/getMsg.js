import { messagesRequest } from './auth';


export const getMessages = async () => {
    try {
        const response = await messagesRequest();
        return response.data.messages
    } catch (error) {
        console.log(error)
        return error
    }
}