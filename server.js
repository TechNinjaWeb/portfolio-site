var PORT = process.env.PORT || 3000,
    express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    sio = io.listen(server)


app.set('views', __dirname + '/public/template');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'public/template'));

app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + '/bower_components'));

app.get('/*', function(req, res, next) {
    res.render('index.html', {
        controller: 'AppCtrl'
    });
});

var userList = {},
    roomsList = {};
roomsList.default = 'NinjaLounge';

io.on('connection', function(socket) {
    // console.log("USER CONNECTED:",socket);
    socket.join('NinjaLounge');
    var handshake, address,
        headers, host, origin;

    user = {},
        user.username = [];
        user.handshake = socket.handshake,
        user.address = socket.handshake.address,
        user.host = socket.handshake.headers.host,
        user.origin = socket.handshake.headers.origin,
        user.rooms = socket.rooms;

    // SEND MESSAGE TO CLIENT ON CONNECT
    var print = [user.address,
        user.host,
        user.origin
    ];
    setTimeout(function() {
        socket.emit('news', "Your User Object is " + print);
        // Log the users data
        console.log("connected to\n",
            user.address + "\n",
            // user.handshake + "\n",
            user.host + "\n",
            // user.origin + "\n",
            user.rooms + "\n");
    }, 5000);

    socket.on('adduser', function(userName) {
        // Add user to master list
        userList[userName] = userName;
        console.log(userList['Rahim\'s Macbook'], "Users List");
        socket.emit("news", "We've Added You: " + userName);
    });

    socket.emit('news', {
        messsage: "You've been connected to Rahims MacbookPro"
    });
    // NEWS EVENT LISTENER
    socket.on('chatMessage', function(message) {
        console.log("Got Some News", message);
        socket.broadcast.emit('response', {
            'message': message.message,
            'id': socket.username,
            'userName': message.sender
        });
    });

    socket.on('getAll', function(data) {
        console.log("Sending rooms & users list to:", user.rooms[0]);
        socket.emit('listAll', {
            'rooms': roomsList,
            'usersOnline': userList
        })
    });

    socket.on('getRooms', function(data) {
        console.log("Sending rooms list to:", user.rooms[0]);
        socket.emit('news', {
            'rooms': roomsList
        })
    });

    socket.on('getUsers', function(data) {
        console.log("Sending Users list to:", user.rooms[0]);
        socket.emit('news', {
            'rooms': roomsList
        })
    });

    socket.on('createRoom', function(room) {
        rooms.push(room);
        socket.emit('updaterooms', rooms, socket.room);
        console.log('Update All Users with New Rooms', rooms, socket.room);
    });

    socket.on('switchRoom', function(newroom) {
        var oldroom;
        oldroom = socket.room;
        socket.leave(socket.room);
        socket.join(newroom);
        socket.emit('updatechat', 'you have connected to ' + newroom);
        socket.broadcast.to(oldroom).emit('updatechat', socket.username + ' has left this room');
        socket.room = newroom;
        socket.broadcast.to(newroom).emit('updatechat', socket.username + ' has joined this room');
        socket.emit('updaterooms', rooms, newroom);
    });

    socket.on('privateMessage', function(username, message) {
        socket.broadcast.to(username).emit(message);
        console.log("Private Message to: " + username);
    })

    // DISCONNECT EVENT LISTENER
    socket.on('disconnect', function(message) {
        console.log("User Left", message);
    });
});



server.listen(PORT, function() {
    console.log("Socket & Express Server Started")
});