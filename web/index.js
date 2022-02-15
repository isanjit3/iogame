var socket = io();

// setup PIXI.js - game scene.

// start the loop

// check for player inputs
inputs = {"left": false}
socket.emit("inputs", inputs)