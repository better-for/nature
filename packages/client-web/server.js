const next = require('next');

const express = require('express');
const bodyParser = require('body-parser');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;
const options = {
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
};

(async () => {
  await app.prepare();
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('/', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));
  server.get('/robots.txt', (req, res) =>
    res.status(200).sendFile('robots.txt', options)
  );

  await server.listen(port, err => {
    if (err) throw err;
    console.log(`> Server is listening on port ${port}`);
  });
})();
