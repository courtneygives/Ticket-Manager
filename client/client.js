var app = angular.module('ticketmgr', []);

app.controller('TixControl', ['$http', function($http) {
  var yep = this;
  yep.tickets = [];
  yep.ticket = {};

  yep.allTickets = function(){
    console.log('Refreshing tickets list');
    return $http.get('/all').then(function(response){
      if(response.status !== 200){
        log('Could not get the tickets list');
      }else{
        yep.tickets = response.data;
      }
    });
  };

  yep.newEntry = function(){
    console.log('click!');
      $http.post('/add', yep.ticket)
      .then(yep.allTickets());
      console.log('Adding ' + yep.ticket.reporter + '\'s ticket');
      yep.clearForm();
    };

  yep.deleteTicket = function(id){
    console.log('Deleting ticket');
    $http.post('/remove', {id: id}).then(yep.allTickets());
  };

  yep.clearForm = function(){
    yep.ticket = {};
  };


  yep.allTickets();

}]);
