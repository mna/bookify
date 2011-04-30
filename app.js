
/**
 * Module dependencies.
 */

var express = require('express');
var io = require('socket.io');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'behemoth' }));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('home', {
    title: 'Bookify!'
  });
});

app.get('/edit-book', function(req, res){
  res.render('edit-book', {
    title: 'Bookify! Editor'
  });
});

app.get('/edit-book/:id', function(req, res){
  res.render('edit-book', {
    title: 'Bookify! Editor',
    bookId: body.params.id
  });
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(9626);
  console.log("Express server listening on port %d", app.address().port);
}

// socket.io, doc here: https://github.com/LearnBoost/Socket.IO-node
var socket = io.listen(app); 
socket.on('connection', function(client){ 
  // new client is here! 
  client.on('message', function(msg){ 
    console.log(msg);
    this.send('Message reçu!'); 
  }); 
  client.on('disconnect', function(){ 
    console.log('Déconnecté...'); 
  }); 
});

