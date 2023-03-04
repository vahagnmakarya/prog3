var socket = io();


socket.on('send matrix', drawing);

var side = 27;

function setup() {
    frameRate(4);
    createCanvas(side * 35, side * 35);
    background('#acacac');
}
grasscolor = "16CC42"

function drawing(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(grasscolor);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 3) {
                fill('red');
            }
            else if (matrix[y][x] == 4) {
                fill('blue');
            }
            else if (matrix[y][x] == 5) {
                fill('black');
            }
            else {
                fill('#acacac')
            }
            rect(side * x, side * y, side, side)
        }
    }
}

socket.on('grass', stats)

function stats(text) {
    document.getElementById('grass').innerHTML = text.grass
    document.getElementById('grasseater').innerHTML = text.grasseater
    document.getElementById('gisatich').innerHTML = text.gisatich
    document.getElementById('hzorgisatich').innerHTML = text.hzorgisatich
    document.getElementById('tunavormichat').innerHTML = text.tunavorMichat
}


function SendEventToKill() {
    socket.emit("work clear", "ankap");
}


function changespring() {
    grasscolor = "#16CC42";
}
function changesummer() {
    grasscolor = "#A5BD1E";
}
function changeautumn() {
    grasscolor = "#FFA83F";
}
function changewinter() {
    grasscolor = "#78D6FF";
}

