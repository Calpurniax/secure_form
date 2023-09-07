import express from "express";
import {createUser, login, logout, profile} from "../controller/UserController.js";
import {authRequired} from "../middlewares/validateToken.js";

const UserRouter=express.Router();

UserRouter.post('/user', createUser)
UserRouter.post('/login', login)
UserRouter.post('/logout', logout)

UserRouter.get('/profile',authRequired, profile)

export default UserRouter