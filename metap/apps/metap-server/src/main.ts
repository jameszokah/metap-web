
import * as express from 'express';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';
import * as cors from 'cors';
import { Server } from 'socket.io';


const app = express();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

const option = {
  key: fs.readFileSync(path.resolve(__dirname, './assets/ssl/key.pem'), 'utf-8'),
  cert: fs.readFileSync(path.resolve(__dirname, './assets/ssl/cert.pem'), 'utf-8')
}


app.use(cors())
const httpsServer = https.createServer(option, app);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to metap-server! ' });
});

const io = new Server(httpsServer, {
  cors: {
    origin: 'https://jameszokah-expert-winner-rx4p4q6rxj2xqg5-4200.preview.app.github.dev/',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }
});


io.on('connection', socket => {
  console.log('Soket server connected ' +socket.id);
  socket.emit('connection-succes', { socketId: socket.id })

  socket.on('connect', () => {
    console.log('Soket client connected ' + socket.id)
  })
})



const port = process.env.port || 4001;
const server = httpsServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
