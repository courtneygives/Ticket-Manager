var express = require('express');
var router = express.Router();
var path = require('path');
var Tix = require('../../models/models');


router.get('/', function(request, response){
  console.log('indexroutes: .get "/"');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));

});

router.get('/all', function(request, response){
  Tix.find({}, function(err, tickets){
    if (err){
      console.log('error getting all tickets: ' + err);
      response.sendStatus(500);
    }else{
      console.log('Getting all tickets');
      response.send(tickets);
    }
  });
});

router.post('/add', function(request, response){
  var data = request.body;
  console.log('Creating a ticket');
  var userTicket = new Tix ({
    name: data.name,
    type: data.type,
    priority: data.priority,
    description: data.description,
    assignee: data.assignee,
    reporter: data.reporter
  });

  userTicket.save(function(err){
    if (err){
      console.log('Error saving ticket: ' + err);
      response.sendStatus(422);
    } else {
      console.log('New ticket added');
      response.sendStatus(200);
    }
  });
});

router.post('/remove', function(request, response){
  Tix.findOne({_id: request.body.id}, function(err, document){
    if (err){
      console.log('Error finding document for deletion: ' + err);
    }

    Tix.remove(document, function(err){
      if (err){
        console.log('Error deleting document: ' + err);
      } else {
        console.log('Ticket deleted');
        response.sendStatus(200);
      }
    });
  });
});

module.exports = router;
