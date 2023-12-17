import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from "./routes";
config();
const app = express();

// middlewares
app.use(express.json());
// morgan is the way to check the backend log when user call api
// *** need to remove in production
app.use(morgan('dev'));

app.use("/api/v1", appRouter);

export default app;
