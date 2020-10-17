import express from 'express';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './router';

const envPath = `${__dirname}/../.env`;
dotenv.config({path : envPath});

const app = express();
app.use(logger);
app.use(router);
app.listen(`${process.env.PORT}`, () => {
  console.log(`${process.env.APP_ID} is running at http://${process.env.HOST}:${process.env.PORT}`);
});
