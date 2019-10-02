import { createConnection } from 'typeorm';

export const createConn = () => {
  return createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../entity/*.ts']
  });
};
