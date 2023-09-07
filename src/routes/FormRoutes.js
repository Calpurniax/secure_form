import express from 'express';
import {createForm, getForm} from "../controller/FormController.js"
import {authRequired} from "../middlewares/validateToken.js";

const FormRouter = express.Router();
FormRouter.post ('/form', createForm )
FormRouter.get ('/form', authRequired, getForm)


export default FormRouter