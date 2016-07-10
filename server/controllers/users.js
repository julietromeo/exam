var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
return {
    index: function(req, res) {
        User.find({}, function(err, results) {
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
        User.findOne({name:req.body.name}, function(err,user){
            if(user){
                res.json(user)
            }
            else{
                var newUser=new User(req.body)
                newUser.save(function(err,data){
                    if(err){
                        console.log('failed')
                    }
                    else{
                        console.log('success')
                        res.json(data)
                    }
                })
            }
        })
        },

    currentuser: function(req,res){
        console.log(req.body.id,'id')
        User.findOne({_id:req.body.id},function(err,user){
            if(err){
                console.log(err)
            }
            else{
                res.json(user)
            }
        })
    },
    oneuser:function(req,res){
        console.log(req.body,'id?')
        User.findOne({_id:req.body.id},function(err,oneuser){
            if(err){
                console.log(err)
            }
            else{
                res.json(oneuser)
            }
        })
    },
    // recent: function(req, res){
	// 		var recent = User.find({}).sort({created_at: -1}).limit(3);
	// 		recent.exec(function(err, results){
	// 			if(err){
	// 				console.log(err);
	// 				res.json(err);
	// 			}else{
	// 				res.json(results);
	// 			}
	// 		})
	// 	},
    // remove:function(req,res){
    //     User.remove({_id:req.params.id}, function(err){
    //         if(err){
    //             console.log(err)
    //         }
    //         else{
    //             res.json()
    //         }
    //     })
    // }
}
})();
