import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import 'dotenv/config';

const app = express();

import { env } from "./src/settings/envs.js"

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet({
    contentSecurityPolicy: false
}))

app.listen(env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${env.PORT}`)
})