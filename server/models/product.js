var mongoose = require('mongoose');
var Schema=mongoose.Schema
var ProductSchema = new mongoose.Schema({
    name:String,
    img:String,
    description:String,
    qty:Number,
    created_at: {type: Date, default: Date.now}
});
Product=mongoose.model('Product', ProductSchema);
