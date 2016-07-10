var users = require('./../controllers/users.js');
var buckets = require('./../controllers/buckets.js');
// var products=require('./../controllers/products.js')
module.exports = function(app) {

app.get('/alluser', function(req, res) {
    users.index(req, res);
})

app.post('/adduser',function(req,res){
    users.create(req,res)
})

app.post('/allappts',function(req,res){
    buckets.index(req,res)
})

app.post('/addappt', function(req, res) {
    console.log(req.body, 'routes')
    buckets.create(req, res);
})

app.get('/delete/:id', function(req, res) {
    buckets.remove(req, res);
    })

app.post('/currentuser', function(req, res){
    users.currentuser(req, res);
});
app.post('/oneuser', function(req, res){
    users.oneuser(req, res);
});

};
