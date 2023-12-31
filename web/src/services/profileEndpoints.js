import axios from './axios';

export const allUsersRequest = () => axios.get('/profiles')
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
export const getUserbyId = id => axios.get(`/profile/${id}`);
export const deleteUserRequest = id => axios.delete(`/profile/${id}`);

export const updateUserRequest = (user, id)=> axios.put(`/profile/${id}`, user)







