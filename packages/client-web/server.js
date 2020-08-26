const next = require('next');

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

  server.get('/', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));

  await server.listen(port, err => {
    if (err) throw err;
    console.log(`> Server is listening on port ${port}`);
  });
})();
