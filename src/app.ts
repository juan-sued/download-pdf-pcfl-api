import 'reflect-metadata';
import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import { accountsRouter } from './routes';



const app = express();

app
  .use(cors())
  .use(json())
  .use('/accounts', accountsRouter)


export default app;
