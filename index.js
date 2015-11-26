var express = require('express');
var app     = express();
var server  = require('http').Server(app);

app.use(express.static('public'));




server.listen(3000, '127.0.0.1', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log('client connecté via la websocket ' + socket.id);

  socket.on('want-to-drink-beer', function (beerIdx) {
    console.log(beerIdx);
    socket.emit('beer-to-drink', beerIdx);
    socket.broadcast.emit('beer-to-drink', beerIdx);
  });  
});

