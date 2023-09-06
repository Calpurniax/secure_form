import express from "express";
import {createUser} from "../controller/UserController.js";

const UserRouter=express.Router();
UserRouter.post('/user',createUser)

export default UserRouter