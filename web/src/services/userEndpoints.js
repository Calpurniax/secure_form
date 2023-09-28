import axios from './axios';

export const updateUserRequest = (user, id)=> axios.put(`/myprofile/${id}`, user)