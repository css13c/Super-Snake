// Require dependencies
var clients = [];
var app = require('http').createServer()
, fs = require('fs')
, io = require('socket.io').listen(app);

//http://stackoverflow.com/questions/19156636/node-js-and-socket-io-creating-room
var usernames = {};
var rooms = ['Lobby'];
// creating the server ( localhost:8000 )
app.listen(52.10.103.58:8000);
 	io.sockets.on('connection', function(socket) 
 	{
  		socket.on('adduser', function (username)
  		{
    	    socket.username = username;
    	    socket.room = 'Lobby';         
    	    usernames[username] = username;
    	    socket.join('Lobby');          
    	    socket.emit('updatechat', 'SERVER', 'you have connected to Lobby');
    	    socket.broadcast.to('Lobby').emit('updatechat', 'SERVER', username + ' has connected to this room');
    	    socket.emit('updaterooms', rooms, 'Lobby');
    	})
  	}