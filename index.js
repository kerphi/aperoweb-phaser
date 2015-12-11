var express = require('express');
var app     = express();
var server  = require('http').Server(app);

// expose le répertoire public/ sur le serveur web 
app.use(express.static('public'));

// lance le serveur web
// écoute les connexions de type http
server.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('aperoweb-phaser listening at http://127.0.0.1:3000');
});

// écoute les connexions de type websocket
var io = require('socket.io')(server);
io.on('connection', function (socket) {
  console.log('client connecté via la websocket ' + socket.id);
  // réagit quand un client a envoyé l'événement want-to-drink-beer
  socket.on('want-to-drink-beer', function (beerIdx) {
    // avertit le client ayant envoyé la demande de bière à boire qu'il peut la boire
    socket.emit('beer-to-drink', beerIdx);
    // avertit tous les autres clients que cette bière est bue
    socket.broadcast.emit('beer-to-drink', beerIdx);
  });
});

// exit on CTRL+C
exitOnSignal('SIGINT');
exitOnSignal('SIGTERM');
function exitOnSignal(signal) {
  process.on(signal, function() {
    console.log('Caught ' + signal + ', exiting');
    process.exit(1);
  });
}