var mongoose = require('mongoose');
var Schema=mongoose.Schema
var BucketSchema = new mongoose.Schema({
    date:String,
    time:String,
    text:{type:String, required: true, minlength:10},
    _name:{type: Schema.Types.ObjectId, ref:'User'},
});
mongoose.model('Bucket', BucketSchema);
