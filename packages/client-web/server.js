const next = require('next');
// const nextI18NextMiddleware = require('next-i18next/middleware').default;
// const i18next = require('./I18n/index').default;
// const i18next = require('i18next');
// const Backend = require('i18next-fs-backend');
// const middleware = require('i18next-http-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;

(async () => {
  await app.prepare();
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // server.use(nextI18NextMiddleware(i18next));
  // server.use(middleware.handle(i18next));

  server.get('/', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));

  await server.listen(port, err => {
    if (err) throw err;
    console.log(`> Server is listening on port ${port}`);
  });
})();
