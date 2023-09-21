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

export const getUserbyId =async (id)=>{
    try{
        const response =await userByIdRequest(id);
        return response.data
    }catch (error) {
        console.log(error)
        return error
    }
}