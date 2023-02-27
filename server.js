var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("mymodules"));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

stat = {
   grass: 0,
   grasseater: 0,
   gisatich: 0,
   hzorgisatich: 0,
   tunavorMichat: 0,
}

matrix = [];
grassArr = [];
grassEaterArr = [];
gisatichArr = [];
hzorgisatichArr = [];
tunavorMichatArr = [];

Grass = require("./mymodules/classes/Grass");
GrassEater = require("./mymodules/classes/GrassEater");;
Gisatich = require("./mymodules/classes/Gisatich");;
HzorGisatich = require("./mymodules/classes/HzorGisatich");;
TunavorMichat = require("./mymodules/classes/TunavorMichat");;


function createObjects() {
   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] == 1) {
            var g = new Grass(x, y, 1);
            grassArr.push(g);
         }
         else if (matrix[y][x] == 2) {
            var ge = new GrassEater(x, y, 2);
            grassEaterArr.push(ge);
         }
         else if (matrix[y][x] == 3) {
            var ges = new Gisatich(x, y, 3);
            gisatichArr.push(ges);
         }
         else if (matrix[y][x] == 4) {
            var gese = new HzorGisatich(x, y, 4);
            hzorgisatichArr.push(gese);
         }
         else if (matrix[y][x] == 5) {
            var gess = new TunavorMichat(x, y, 5);
            tunavorMichatArr.push(gess);
         }
      }
   }
}
function clear() {
   console.log('asdadasdasdasdsad')
   matrix = [];
   grassArr = [];
   grassEaterArr = [];
   gisatichArr = [];
   hzorgisatichArr = [];
   tunavorMichatArr = [];

   io.sockets.emit("send matrix", matrix);
}

io.sockets.emit("clear", clear());


function work() {
   for (var i = 0; i < grassArr.length; i++) {
      grassArr[i].mul();
   }
   stat.grass = i;
   for (var i = 0; i < grassEaterArr.length; i++) {
      grassEaterArr[i].eat();
   }
   stat.grasseater = i;
   for (var i = 0; i < gisatichArr.length; i++) {
      gisatichArr[i].eat();
   }
   stat.gisatich = i;
   for (var i = 0; i < hzorgisatichArr.length; i++) {
      hzorgisatichArr[i].eat();
   }
   stat.hzorgisatich = i;
   for (var i = 0; i < tunavorMichatArr.length; i++) {
      tunavorMichatArr[i].eat();
   }
   stat.tunavorMichat = i;



   io.sockets.emit("grass", stat);
   io.sockets.emit("send matrix", matrix);

}

function generateMatrix(size) {
   var matrix = [];
   for (var y = 0; y < size; y++) {
      matrix[y] = [];
      for (var x = 0; x < size; x++) {
         var randomElement = Math.round(Math.random() * 5);
         matrix[y][x] = randomElement;
      }
   }
   return matrix;
}



matrix = generateMatrix(35);

io.on('connection', function (socket) {
   createObjects()
   setInterval(work, 600)

});


