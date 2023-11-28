import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import 'dotenv/config';

const app = express();

app.listen(process.env.PORT || 3001, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
})