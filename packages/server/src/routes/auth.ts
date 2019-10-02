import express, { Express } from 'express';
import User from '../entity/User';
import { Connection } from 'typeorm';
import bcrypt from 'bcrypt';
import { generateJWT } from '../util/jwt';

/**
 * `/auth/*` Router
 */
export default (app: Express, conn: Connection) => {
  const router = express.Router();

  /**
   * `POST /auth/register`
   *
   * email, password, name을 전송하여 사용자 등록을 함.
   */
  router.post('/register', async (req, res) => {
    try {
      const user = await User.registerUser(
        req.body.email,
        req.body.password,
        req.body.name
      );

      res.send({
        id: user.id,
        email: user.email,
        name: user.name
      });
    } catch (err) {
      res.send({
        error: {
          code: -9999,
          message: 'Error!'
        }
      });
    }
  });

  /**
   * `POST /auth/login`
   *
   * 이메일과 패스워드를 전송하여 로그인한다.
   * accessToken을 응답으로 받으며 이후 이 토큰으로 서버와 통신이 가능하다.
   */
  router.post('/login', async (req, res) => {
    const user = await conn.getRepository(User).findOne({
      where: {
        email: req.body.email
      }
    });

    // TODO: JWT 생성 아래 방식으로 변경하기
    // const privateKey = fs.readFileSync('private.key');
    // const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
    const token = generateJWT(user.id);

    const rst = await bcrypt.compare(req.body.password, user.password);
    if (rst) {
      res.cookie('token', token);
      res.send({
        id: user.id,
        email: user.email,
        name: user.name,
        accessToken: token
      });
    } else {
      res.send({
        error: {
          code: -9999,
          message: 'Error!'
        }
      });
    }
  });

  return router;
};
