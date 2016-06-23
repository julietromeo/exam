var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Cust=mongoose.model('Cust');
var Product=mongoose.model('Product');

module.exports = (function() {
return {
    index: function(req, res) {
        Order.find({}).populate('_name').populate('_product').exec(function(err, results) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(results);
            }
        })
    },

    create:function(req,res){
        console.log(req.body, 'req.body')
        //req.body=newOrder
        //{customer: '576796000272934a0c081dab',qty: '3',product: '5767852e8a1355d70bcb3e35' }
        var newOrder=new Order({_name:req.body.customer, _product:req.body.product, qty:req.body.qty, created_at:req.body.created_at})
        
        newOrder.save(function(err){
            if(err){
                console.log('failed')
            }
            else{
                console.log('success')
                module.exports.index(req,res)
            }
        })
    }

}
})();
