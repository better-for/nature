import jwt from 'jsonwebtoken';

interface JWTPayload {
  id: string;
}

/**
 * JWT 생성
 *
 * @param id User ID
 */
export const generateJWT = (id: string) => {
  return jwt.sign({ id } as JWTPayload, 'SOME_SECRET');
};

/**
 * JWT 검증 및 데이터 추출
 *
 * @param JWT User AccessToken
 */
export const verifyJWT = (JWT: string) => {
  return jwt.verify(JWT, 'SOME_SECRET') as JWTPayload;
};
