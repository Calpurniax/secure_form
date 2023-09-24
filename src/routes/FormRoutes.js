import express from 'express';
import * as formCrtl from "../controller/FormController.js"
import {limiterPostForm, limiterGetForm} from "../middlewares/rateLimiter.js"
import { authRequired } from "../middlewares/validateToken.js";

const FormRouter = express.Router();
FormRouter.post('/form', limiterPostForm, formCrtl.createForm)
FormRouter.get('/form', limiterGetForm, authRequired, formCrtl.getForms)
FormRouter.delete('/form/:id', authRequired, formCrtl.deleteMessage)

export default FormRouter