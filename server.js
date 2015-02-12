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

io.on('message', function(req, res) {
    console.log("Got Message");
});

io.on('disconnect', function(req, res) {
    console.log("User Left");
});

io.on('connection', function(socket) {
    console.log("connected");
    socket.emit('message', {
        hello: 'world'
    });
    socket.on('news', function(data) {
        console.log(data);
    });
});

server.listen(PORT, function(){console.log("Socket & Express Server Started")});