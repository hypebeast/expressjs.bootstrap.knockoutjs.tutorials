
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var tutorial1 = require('./routes/tutorial1');
var tutorial2 = require('./routes/tutorial2');
var tutorial3 = require('./routes/tutorial3');
var mail = require('./routes/mail');
var http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3030);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Route configs
app.get('/', routes.index);
app.get('/about', routes.about);

app.get('/tutorial1', tutorial1.index);
app.get('/tutorial2', tutorial2.index);
app.get('/tutorial3', tutorial3.index);

app.get('/mail', mail.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
