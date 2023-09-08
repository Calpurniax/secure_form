import express from "express";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import FormRoutes from "./routes/FormRoutes.js"
import UserRouter from "./routes/UserRoutes.js";

const app =express();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(cookieParser());


app.use(morgan('dev'));
app.use('/api', FormRoutes);
app.use('/api', UserRouter);

export default app
