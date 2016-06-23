var mongoose = require('mongoose');
var Product=mongoose.model('Product');

module.exports = (function() {
return {
    index: function(req, res) {
        Product.find({}, function(err, results) {
            if(err) {
                console.log(err);
            }
            else{
                res.json(results);
                // console.log(results)
            }
        })
    },

    create:function(req,res){
        var newProduct=new Product({name:req.body.name, img:req.body.img, description:req.body.description, qty:req.body.qty, created_at:req.body.created_at})
        newProduct.save(function(err){
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
