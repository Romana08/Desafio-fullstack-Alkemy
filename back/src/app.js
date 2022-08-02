import express from 'express';
import userRouter from '../src/routes/index.routes.js'

const app = express();
app.use(express.json()); //con esta linea, el programa entiende los archivos en formato JSON


app.use(userRouter);
 export default app;

