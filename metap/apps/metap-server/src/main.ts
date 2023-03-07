import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import mediasoup from 'mediasoup';

enum Role {
  ADMIN = "admin",
  MODERATOR = "moderator",
  USER = "user"
}

class Room {
  // properties
  id: string;
  router: any;
  peers: Map<string, Peer>;

  constructor(id: string, router: any) {
    this.id = id;
    this.router = router;
    this.peers = new Map();
  }

  addPeer(peer: Peer) {
    this.peers.set(peer.id, peer);
  }

  removePeer(peerId: string) {
    this.peers.delete(peerId);
  }
}

class Peer {
  // properties
  id: string;
  transport: any;
  rtpSender: any;
  displayName: string;
  displayPhoto: string;
  email: string;
  role: Role;

  constructor(id: string, displayName: string, displayPhoto: string, email: string, role: Role) {
    this.id = id;
    this.displayName = displayName;
    this.displayPhoto = displayPhoto;
    this.email = email;
    this.role = role;
  }

  async joinRoom(roomId: string, router: any) {
    this.transport = await router.createWebRtcTransport({
      listenIps: [{ ip: '127.0.0.1', announcedIp: null }],
      enableUdp: true,
      enableTcp: true,
    });
  }

  async produce(data: any, router: any) {
    this.rtpSender = await this.transport.produce({
      kind: data.kind,
      rtpParameters: data.rtpParameters
    });
  }

  async consume(data: any) {
    await this.transport.consume({
      id: data.id,
      kind: data.kind,
      rtpParameters: data.rtpParameters
    });
  }
}

// Map to store all the rooms
const rooms = new Map<string, Room>();

// Map to store all the available rooms
const availableRooms = new Map<string, Room>();

const app = express();
const server = http.createServer(app);


const io = socketIO(server);

// Create a mediasoup worker
const worker = await mediasoup.createWorker();

// Create a new room when a client connects
io.on('connection', async (socket) => {
  // Send the available rooms to the client
  socket.emit('availableRooms', Array.from(availableRooms.keys()));

  // Handle when a client creates a new room
  socket.on('createRoom', async (roomId) => {
    // Check if the room already exists, if not create it
    if (!rooms.has(roomId)) {
      const router = await worker.createRouter({
        mediaCodecs:
          [
            {
              kind: 'audio',
              mimeType: 'audio/opus',
              clockRate: 48000,
              channels: 2
            },
            {
              kind: 'video',
              mimeType: 'video/VP8',
              clockRate: 90000,
              parameters:
                {
                  'x-google-start-bitrate': 1000
                }
            }
          ]
      });
      const room = new Room(roomId, router);
      rooms.set(roomId, room);
      availableRooms.set(roomId, room);
      socket.emit('roomCreated', roomId);
      socket.join(roomId);
    }
    else {
      socket.emit('roomExists', roomId);
    }
  });

  // Handle when a client joins a room
  socket.on('joinRoom', async (roomId) => {
    if (availableRooms.has(roomId)) {
      const room = availableRooms.get(roomId);
      const displayName = socket.handshake.query.displayName;
      const displayPhoto = socket.handshake.query.displayPhoto;
      const email = socket.handshake.query.email;
      const role = socket.handshake.query.role;

      // create a new peer
      const peer = new Peer(socket.id, displayName, displayPhoto, email, role);
      room.addPeer(peer);
      await peer.joinRoom(roomId, room.router);

      // send the peer's transport information to other clients in the room
      socket.to(roomId).emit('newPeer', {
        id: peer.id,
        iceParameters: peer.transport.iceParameters,
        iceCandidates: peer.transport.iceCandidates,
        dtlsParameters: peer.transport.dtlsParameters
      });

      // receive transport information from other clients and start consuming their media
      socket.on('newPeer', async (data) => {
        await peer.consume(data);
      });

      // handle disconnections
      socket.on('disconnect', () => {
        room.removePeer(peer.id);
        if (room.peers.size === 0) {
          availableRooms.delete(roomId);
        }
      });
    }
    else {
      socket.emit('roomNotExists', roomId);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


