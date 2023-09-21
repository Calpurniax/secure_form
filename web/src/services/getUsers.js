import { allUsersRequest } from './auth';


export const getUsers = async () => {
    try {
        const response = await allUsersRequest();       
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}