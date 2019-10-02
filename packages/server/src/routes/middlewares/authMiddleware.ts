import { verifyJWT } from '../../util/jwt';
import { getRepository } from 'typeorm';
import User from '../../entity/User';
import { Request } from 'express';

/**
 * 요청 Header로 부터 access token을 추출하고, 검증한 후 req객체에 currentUser를 추가함
 * @param req
 * @param res
 * @param next
 */
export const authMiddleware = async (req: Request, res, next) => {
  try {
    const accessToken = req.headers.authorization.split('Bearer ')[1];
    const decoded = verifyJWT(accessToken);
    req.user = await getRepository(User).findOne(decoded.id);
    return next();
  } catch (err) {
    return next(err);
  }
};
