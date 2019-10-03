if (!process.env.NODE_ENV) {
  throw 'NODE_ENV not provided!';
}

const path = require('path');
const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env'
    : `.env.${process.env.NODE_ENV}`;

require('dotenv').config({
  path: path.resolve(process.cwd(), envFile)
});

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};
