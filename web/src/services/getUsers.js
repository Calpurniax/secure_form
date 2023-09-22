import { allUsersRequest, userByIdRequest } from './auth';

export const getUsers = async () => {
    try {
        const response = await allUsersRequest();
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getUserbyId = async (id) => {
    try {
        const response = await userByIdRequest(id);
        if (response.status === 200) {             
             return response.data
       }
        
    } catch (error) {
        console.log(error)
        return error
    }
}