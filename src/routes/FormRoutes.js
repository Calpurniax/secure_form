import express from 'express';
import * as formCrtl from "../controller/FormController.js"
import { authRequired } from "../middlewares/validateToken.js";

const FormRouter = express.Router();
FormRouter.post('/form', formCrtl.createForm)
FormRouter.get('/form', authRequired, formCrtl.getForms)

export default FormRouter