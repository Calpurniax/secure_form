import express from "express";
import * as authCrtl from "../controller/AuthController.js"

const AuthRouter = express.Router();

AuthRouter.post('/login', authCrtl.login)
AuthRouter.post('/logout', authCrtl.logout)

export default AuthRouter