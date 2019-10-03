import express, { Express } from 'express';
import authRoute from './routes/auth';
import usersRoute from './routes/users';
import { Connection } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import 'reflect-metadata';

type NodeEnv = 'production' | 'development' | 'test';

const nodeEnv = process.env.NODE_ENV as NodeEnv;
if (!nodeEnv) {
  throw 'Invalid Envioronment!';
}

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${nodeEnv}`)
});

const prepareApp = (conn: Connection): Express => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const authRouteMiddleware = authRoute(app, conn);
  app.use('/auth', authRouteMiddleware);

  const usersRouteMiddleware = usersRoute(app, conn);
  app.use('/users', usersRouteMiddleware);

  app.use((err, req, res, next) => {
    res.status(500).send({
      code: -9999,
      message: 'this is error'
    });
  });

  return app;
};

export default prepareApp;
