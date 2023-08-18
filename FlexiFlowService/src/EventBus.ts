// eventBus.ts
import { Server } from 'socket.io';

let io: Server; // Socket.io server instance

export const initializeEventBus = (server: Server) => {
  io = server;
};

export const subscribeToTopic = (topic: string) => {
  io.on('connection', (socket) => {
    socket.join(topic);
  });
};

export const publishToTopic = (topic: string, data: any) => {
  io.to(topic).emit('event', data);
};