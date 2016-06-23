var mongoose = require('mongoose');
var CustSchema = new mongoose.Schema({
  name: String,
  created_at: {type: Date, default: Date.now}
});
Cust=mongoose.model('Cust', CustSchema);
