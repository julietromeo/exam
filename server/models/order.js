var mongoose = require('mongoose');
var Schema=mongoose.Schema
var OrderSchema = new mongoose.Schema({
    _name:{type:Schema.Types.ObjectId, ref:'Cust'},
    _product:{type:Schema.Types.ObjectId, ref:'Product'},
    qty:Number,
    created_at: {type: Date, default: Date.now}
});
mongoose.model('Order', OrderSchema);
