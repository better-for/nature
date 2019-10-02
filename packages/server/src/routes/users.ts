import express, { Express } from 'express';
import { Connection } from 'typeorm';
import { authMiddleware } from './middlewares/authMiddleware';

/**
 * `/users/*` Router
 */
export default (app: Express, conn: Connection) => {
  const router = express.Router();

  router.use(authMiddleware);

  /**
   * `GET /users/me`
   *
   * 내 정보를 가져온다.
   */
  router.get('/me', async (req, res) => {
    res.send({
      id: req.user.id,
      email: req.user.email,
      name: req.user.name
    });
  });

  return router;
};
