import express from "express";
import * as userCrtl from '../controller/UserController.js';
import { authRequired } from '../middlewares/validateToken.js';
import { adminRequired } from '../middlewares/validateRole.js';
import { checkId } from '../middlewares/validateId.js';
import {validateSecurePassword} from '../middlewares/validateInput.js';

const UserRouter = express.Router();

//RUTA DEL USUARIO PARA SU PERFIL

UserRouter.put('/myprofile/:id', [authRequired, validateSecurePassword, checkId], userCrtl.updateUser)
UserRouter.get('/myprofile/:id', [authRequired, checkId], userCrtl.getprofileById)

//AQUI LAS RUTAS SOLO ADMIN PARA CRUD DE USUARIOS

UserRouter.post('/register', [authRequired,validateSecurePassword, adminRequired], userCrtl.createUser)

UserRouter.get('/profile/:id', [authRequired, adminRequired], userCrtl.getprofileById)
UserRouter.delete('/profile/:id', [authRequired, adminRequired], userCrtl.deleteUser)
UserRouter.put('/profile/:id', [authRequired, validateSecurePassword, adminRequired], userCrtl.updateUser)


UserRouter.get('/profiles', [authRequired, adminRequired], userCrtl.getProfiles)

export default UserRouter