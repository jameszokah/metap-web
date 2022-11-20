
import * as express from 'express';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';


const app = express();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

const option = {
  key: fs.readFileSync(path.resolve(__dirname, './assets/ssl/key.pem'), 'utf-8'),
  cert: fs.readFileSync(path.resolve(__dirname, './assets/ssl/cert.pem'), 'utf-8')
}

const httpsServer = https.createServer(option, app);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to metap-server! for mediasoup!' });
});

const port = process.env.port || 4001;
const server = httpsServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
