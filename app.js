var express = require('express'),
	path = require('path'),
	app = express();

app.set('views', __dirname + '/public/template');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');  

// app.set('views', path.join(__dirname, 'public/template'));

app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + '/bower_components'));

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/*', function(req, res, next){
    res.render('index.html', {
    	controller: 'AppCtrl'
    });
});

app.listen(3000);