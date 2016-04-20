var express = require('express');
var path = require('path');
//var model = require("");
var router = express.Router();
var Tix = require('../../models/models.js');


router.get('/', function(request, response){
  console.log('indexroutes: .get "/"');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});
// :::::::::: ALL :::::::::: //
router.get('/all', function(request, response){
  Tix.find({}, function(err, payload){
    if(err){
      console.log('Error getting /all: ' + err);
    } else {
      console.log('Getting /all');
      response.send(payload);
    }
  });
});


// :::::::::: ADD :::::::::: //
router.post('/add', function(request, response){
  var data = request.body;
  console.log('indexroutes: this is the "/add"');
  var issue = new Tix({
    name: data.name,
    type: data.type,
    priority: data.priority,
    description: data.description,
    assignee: data.assignee,
    reporter: data.reporter,
    date: data.date,
    updated: data.updated,
    update: data.update
  });

  issue.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(418); //"I'm a teapot."
    } else {
      console.log('Saved ' + data.name);
      response.sendStatus(200);
    }
  });
});

// :::::::::: REMOVE :::::::::: //

router.post('/remove', function(request, response){
  Tix.findByIdAndRemove({_id: request.body.id}, function(err, document){
    if (err){
      console.log('Problem deleting ticket: ', err);
    } else {
      console.log('DELETED!');
      response.sendStatus(200);
    }
  });
});



module.exports = router;
