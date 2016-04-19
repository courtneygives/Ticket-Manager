var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tixModel = new Schema ({
  name: {
    type: String,
    required: true
  },
  type: String,
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

var Tix = mongoose.model('Tix', tixModel);

module.exports = Tix;
