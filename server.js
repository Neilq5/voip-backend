require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('offer', (offer) => {
        console.log('offer', offer);
    });

    socket.on('answer', (answer) => {
        console.log('answer', answer);
    });

    socket.on('iceCandidate', (candidate) => {
        console.log('iceCandidate', candidate);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id);
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});