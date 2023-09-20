import express from "express";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import FormRoutes from "./routes/FormRoutes.js"
import UserRouter from "./routes/UserRoutes.js";
import AuthRouter from "./routes/AuthRoutes.js";

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});

app.use(express.json());
app.use(cookieParser());


app.use(morgan('dev'));
app.use('/api', FormRoutes);
app.use('/api', UserRouter);
app.use('/api', AuthRouter);

export default app
