var PORT = process.env.PORT || 8080,
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

io.on('connection', function(socket) {
    var handshake, address, 
        headers, host, origin, 
        rooms, listOfUsers = [];

    user = {},
    user.handshake = socket.handshake,
    user.address = socket.handshake.address,
    user.host = socket.handshake.headers.host,
    user.origin = socket.handshake.headers.origin,
    user.rooms = socket.rooms;
    // Log the users data
    console.log("connected to\n",
        user.address + "\n",
        user.host + "\n",
        user.origin + "\n",
        user.rooms + "\n");
    // SEND MESSAGE TO CLIENT ON CONNECT
    var print = [user.address,
        user.host,
        user.origin];
        print.forEach(function(val){
            JSON.stringify(val);
        })
    setTimeout(function(){
        socket.emit('response', "SERVER: Your User Object is "+ print);
    }, 10000);


    socket.emit('news', {
        messsage: "You've been connected to Rahims MacbookPro"
    });
    // NEWS EVENT LISTENER
    socket.on('client', function(data) {
        console.log("Got Some News", data);
        socket.broadcast.emit('response', data);
    });
    // DISCONNECT EVENT LISTENER
    socket.on('disconnect', function(data) {
        console.log("User Left", data);
    });
});



server.listen(PORT, function() {
    console.log("Socket & Express Server Started")
});
