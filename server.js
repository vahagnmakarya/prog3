var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("mymodules"));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);


matrix = [1, 2, 3];

grassArr = [];
grassEaterArr = [];
gisatichArr = [];
hzorgisatichArr = [];
tunavorMichatArr = [];

matrix = generateMatrix(35);

function generateMatrix(size) {
   var matrix = [];
   for (var y = 0; y < size; y++) {
      matrix[y] = [];
      var randomElement = Math.random([0, 2, 0, 0, 0, 4, 0, 4, 5, 5, 5, 5, 5, 5, 0, 2, 1, 2, 2, 0, 3, 0, 0, 1, 2, 3, 2, 2, 1, 2]);
         for (var x = 0; x < size; x++) {
         matrix[y][x] = randomElement;
      }
   }
   return matrix;
}

io.on('connection', function (socket) {
      socket.emit("send matrix", matrix);
});
