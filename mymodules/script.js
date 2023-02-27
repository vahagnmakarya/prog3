var socket = io();


socket.on('send matrix', drawing);


var side = 27;

function setup() {
    frameRate(4);
    createCanvas(side * 35, side * 35);
    background('#acacac');
}

function drawing(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
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

function stats(stat){
    document.getElementById('grass').innerHTML = stat.grass
    document.getElementById('grasseater').innerHTML = stat.grasseater
    document.getElementById('gisatich').innerHTML = stat.gisatich
    document.getElementById('hzorgisatich').innerHTML = stat.hzorgisatich
    document.getElementById('tunavormichat').innerHTML = stat.tunavorMichat
 } 


  function SendEventToKill(){
    console.log('asdsadasdasd');
    socket.on('clear')
 }

 //
