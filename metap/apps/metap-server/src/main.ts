
import * as express from 'express';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';
import * as cors from 'cors';
import { Server, Socket } from 'socket.io';
import next, { NextApiHandler } from 'next';


const app = express();


const option = {
  key: fs.readFileSync(path.resolve(__dirname, './assets/ssl/key.pem'), 'utf-8'),
  cert: fs.readFileSync(path.resolve(__dirname, './assets/ssl/cert.pem'), 'utf-8')
}

const clientUrl = 'https://jameszokah-expert-winner-rx4p4q6rxj2xqg5-4200.preview.app.github.dev/';

const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();





nextApp.prepare().then(async () => {
  app.use(cors())


const httpsServer = https.createServer(option, app);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to metap-server! ' });
});
  const io: Server = new Server();
  io.attach(httpsServer);


  io.on('connection', (socket: Socket) => {
    console.log('connection');
    socket.emit('status', 'Hello from Socket.io');

      socket.on('disconnect', () => {
        console.log('client disconnected');
      })
    });

    // app.all('*', (req, res) => nextHandler(req, res));


  const port = process.env.port || 4001;
const server = httpsServer.listen(port, () => {
  console.log(`Listening at https://localhost:${port}/api`);
});
server.on('error', console.error);

})



