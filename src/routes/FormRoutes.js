import express from 'express';
import {createForm} from "../controller/FormController.js"

const FormRouter = express.Router();
FormRouter.post ('/form', createForm )


export default FormRouter