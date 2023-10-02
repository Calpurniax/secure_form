import express from "express";
import * as authCrtl from "../controller/AuthController.js"
import { limiterLogin } from "../middlewares/rateLimiter.js"
import {validateLogin} from '../middlewares/validateInput.js'

const AuthRouter = express.Router();

AuthRouter.post('/login', limiterLogin, validateLogin, authCrtl.login)
AuthRouter.post('/logout', authCrtl.logout)
AuthRouter.get('/verify', authCrtl.checkLogin )


export default AuthRouter