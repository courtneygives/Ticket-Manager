var express = require('express');
var mongoose = require('mongoose');
var indexRoutes = require('./routes/indexroutes');
var bodyParser = require('body-parser');
var app = express();
var tickets = require('../models/models.js');

var mongoURI = 'mongodb://localhost/ticketmgr';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error! ', err);
});

MongoDB.once('open', function() {
  console.log('Mongo connection open!');
});

app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/', indexRoutes);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
});
