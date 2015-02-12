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
    console.log("connected");
    // SEND MESSAGE TO CLIENT ON CONNECT
    socket.emit('news', {
        messsage: "You've been connected to Rahims MacbookPro"
    });
    // NEWS EVENT LISTENER
    socket.on('news', function(data) {
        console.log("Got Some News", data);
        io.emit('news', data);
    });
    // MESSAGE EVENT LISTENER
    socket.on('message', function(data) {
        console.log("Got Message", data);
        io.emit('message', data);
    });
    // DISCONNECT EVENT LISTENER
    socket.on('disconnect', function(data) {
        console.log("User Left", data);
    });
});



server.listen(PORT, function() {
    console.log("Socket & Express Server Started")
});