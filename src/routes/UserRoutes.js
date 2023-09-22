import express from "express";
import * as userCrtl from "../controller/UserController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { adminRequired } from "../middlewares/validateRole.js";

const UserRouter = express.Router();


//AQUI LAS RUTAS SOLO ADMIN PARA CRUD DE USUARIOS

UserRouter.post('/register', [authRequired, adminRequired], userCrtl.createUser)

UserRouter.get('/profile/:id', [authRequired, adminRequired], userCrtl.getprofileById)
UserRouter.delete('/profile/:id', [authRequired, adminRequired], userCrtl.deleteUser)

UserRouter.get('/profiles', [authRequired, adminRequired], userCrtl.getProfiles)
UserRouter.put('/profiles', [authRequired, adminRequired], userCrtl.updateUser)


export default UserRouter