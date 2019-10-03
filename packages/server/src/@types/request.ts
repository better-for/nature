import { Express } from 'express';

export interface MyRequest<T> extends Express.Request {
  user?: import('../../src/entity/User').default;
  body: T;
}
