var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var User=mongoose.model('User');

module.exports = (function() {
return {
    index: function(req, res) {
        Bucket.find({}).populate('_name').exec(function(err, results) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(results,'what happened?')
                res.json(results);
            }
        })
    },

    create:function(req,res){
        console.log(req.body,'reqbodyyyyy')
        var newAppt=new Bucket({date:req.body.date, time:req.body.time, text:req.body.text, _name:req.body.id.id.id})

        newAppt.save(function(err,results){
            if(err){
                console.log('failed')
            }
            else{
                console.log('success')
                res.json(results)
            }
        })
    },

    remove:function(req,res){
        console.log(req.params.id,'idddddd')
        Bucket.remove({_id:req.params.id}, function(err, data){
            if(err){
                console.log(err)
            }
            else{
                res.json(data)
            }
        })
    }


}
})();
