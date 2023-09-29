import axios from './axios';

export const ownUserRequest =(id, user)=> axios.get(`/myprofile/${id}`, user)

export const updateOwnUserRequest = (user, id)=> axios.put(`/myprofile/${id}`, user)