var app = angular.module('app', []);

app.controller('BehindCurtain', ['$http', function($http){
  // :::::::::::: START CONTROLLER ::::::::::::: //
  var issue = this;
  issue.issueList = [];
  issue.ticket = {};

  issue.thing = 1;

  // ::::::: GET ALL TICKETS ::::::: //
  issue.getTix = function(){
    return $http.get('/all').then(function(response){
      console.log('Getting all tickets');
      issue.issueList = {};
      issue.issueList = response.data;

    });
  };

  issue.setPriorty = function(priorty){
    issue.ticket.priority = priority;
  };

  // ::::::: SAVE NEW TICKET ::::::: //
  issue.newEntry = function(){
    console.log('click!');
    console.log('Saving ' + issue.ticket.name);
    issue.issueList.push(issue.ticket);
    var addDate = Date.now();
    addDate = issue.ticket.date;
    $http.post('/add', issue.ticket).then(issue.getTix());
    issue.clearForm();
  };


  // ::::::: REMOVE TICKET ::::::: //
  issue.deleteEntry = function(id){
    console.log('click');
    $http.post('/remove', {id:id});
    issue.getTix();
  };

  // ::::::: CLEAR FORM ::::::: //
  issue.clearForm = function() {
    issue.ticket = {};
  };

  issue.getTix();

  // var moreInfo = false;

  // issue.reveal = function(){
  //   console.log('click!');
  //   if (moreInfo === false){
  //       moreInfo = true;
  //   } else {
  //     moreInfo = false;
  //   }
  //   console.log('?');
  //
  // };
  // ::::::::::::: CLOSE CONTROLLER :::::::::::: //
}]);
