var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tix = new Schema ({
  name: {
    type: String,
    required: true
  },
  yype: String,
  priority: {
    type: Number,
    min: 1,
    max: 5
  },
  description: String,
  assignee: String,
  reporter: {
    type: String,
    required: true
  }
});

var Ticket = mongoose.model('Ticket', Tix);

module.exports = Ticket;
