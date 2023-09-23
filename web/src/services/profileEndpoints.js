import axios from './axios';

export const getUserbyId = id => axios.get(`/profile/${id}`);
export const deleteUserRequest = id => axios.delete(`/profile/${id}`);







