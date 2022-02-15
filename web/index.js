//const { createContext } = require("vm");

var socket = io();

// getting reference to HTML canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function init() {
    drawPlayer();
}

init()

function drawPlayer() { // replace with PixiJS implementation
    ctx.beginPath()
    ctx.rect(20, 40, 50, 50) // (x, y, width, height)
    // ctx.arc(240, 160, 20, 0, Math.PI*2, false); // circle (x, y, radius, startAngle, endAngle [, counterclockwise])
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath()
}
// setup PIXI.js - game scene.

// start the loop

// check for player inputs
inputs = {"left": false}
socket.emit("inputs", inputs)