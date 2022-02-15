const express = require('express');
const app = express();
const http = require('http');
const { hrtime } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("inputs", function(data){
        
    })

});

app.use('/', express.static('web'))


const hrtimeMs = function() {
    let time = process.hrtime()
    return time[0] * 1000 + time[1] / 1000000
}

const TICK_DELTA = 1/60
let tick = 0
let previous = hrtimeMs()
let tickLengthMs = 1000 / TICK_DELTA

function gameLoop(delta){
    setTimeout(gameLoop, tickLengthMs)
    let now = hrtimeMs();
    let delta = (now - previous) / 1000
    console.log('delta', delta)
    // game logic would go here

    // take into account player inputs

    // calculate physics/collisions

    // send the new game state to the players
    previous = now
    tick++

}

server.listen(3000, () => {
    console.log('listening on *:3000');
});


gameLoop(TICK_DELTA)



