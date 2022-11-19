/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import https from 'httpolyglot';
import * as fs from 'fs';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const option = {
  key: fs.readFileSync('./ssl/key.pem', 'utf-8'),
  cert: fs.readFileSync('./ssl/cert.pem', 'utf-8')
}

const httpsServer = https.createServer(Option, app)
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to metap-server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
