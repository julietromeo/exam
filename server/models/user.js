var mongoose = require('mongoose');
var Schema=mongoose.Schema
var UserSchema = new mongoose.Schema({
  name: {type:String, required: true, minlength:3},
  _bucket:{type:Object, ref:'Bucket'},
  _tagged:{type:Object, ref:'Bucket'},
  created_at: {type: Date, default: Date.now}
});
User=mongoose.model('User', UserSchema);
