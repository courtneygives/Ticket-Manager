var app = angular.module('app', []);

app.controller('BehindCurtain', ['$http', function($http){
  // :::::::::::: START CONTROLLER ::::::::::::: //
  var issue = this;
  issue.issueList = [];
  issue.ticket = {};

  // ::::::: GET ALL TICKETS ::::::: //
  issue.getTix = function(){
    return $http.get('/all').then(function(response){
      console.log('Getting all tickets');
      issue.issueList = {};
      issue.issueList = response.data;

    });
  };

  // ::::::: SAVE NEW TICKET ::::::: //
  issue.newEntry = function(){
    console.log('click!');
    console.log('Saving ' + issue.ticket.name);
    issue.issueList.push(issue.ticket);

    $http.post('/add', issue.ticket).then(issue.getTix());
  };


  // ::::::: REMOVE TICKET ::::::: //
  issue.deleteEntry = function(id){
    console.log('click');
    $http.post('/remove', {id:id});
    issue.getTix();
  };

  // ::::::: CLEAR FORM ::::::: //




issue.getTix();
  // ::::::::::::: CLOSE CONTROLLER :::::::::::: //
}]);
