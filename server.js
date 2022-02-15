const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/', express.static('web'))

io.on('connection', (socket) => {
    console.log('a user connected');



});

const TICK_DELTA = 1/60
function gameLoop(delta){
    // take into account player inputs

    // calculate physics/collisions

    // send the new game state to the players

    setTimeout(gameLoop, TICK_DELTA)
}

server.listen(3000, () => {
    console.log('listening on *:3000');
});


gameLoop(TICK_DELTA)


