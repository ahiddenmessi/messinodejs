var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var port = process.env.PORT || 3000; 
//beacause its for heroku

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(server_port, function(){
  console.log('listening on *:' + port);
});