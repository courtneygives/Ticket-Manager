var express = require('express');
var path = require('path');
//var model = require("");
var router = express.Router();

router.get('/', function(request, response){
  console.log('indexroutes: .get "/"');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));

});

router.get('/create', function(request, response){
  console.log('indexroutes: this is the "/create"');
});  //save?

module.exports = router;
