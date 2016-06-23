var mongoose = require('mongoose');
var Cust = mongoose.model('Cust');

module.exports = (function() {
return {
    index: function(req, res) {
        Cust.find({}, function(err, results) {
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
        var newCust=new Cust({name:req.body.name, created_at:req.body.created_at})
        newCust.save(function(err){
            if(err){
                console.log('failed')
            }
            else{
                console.log('success')
                module.exports.index(req,res)
            }
        })
        },
    recent: function(req, res){
			var recent = Cust.find({}).sort({created_at: -1}).limit(3);
			recent.exec(function(err, results){
				if(err){
					console.log(err);
					res.json(err);
				}else{
					res.json(results);
				}
			})
		},
    remove:function(req,res){
        Cust.remove({_id:req.params.id}, function(err){
            if(err){
                console.log(err)
            }
            else{
                res.json()
            }
        })
    }
}
})();
