var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tixModel = new Schema ({
  tixName: {
    type: String,
    required: true
  },
  tixType: String,
  tixPriority: {
    type: Number,
    min: 1,
    max: 5
  },
  tixDescription: String,
  tixAssignee: String,
  tixReporter: {
    type: String,
    required: true
  }
});
