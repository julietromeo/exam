var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products=require('./../controllers/products.js')
module.exports = function(app) {

app.get('/allcust', function(req, res) {
customers.index(req, res);
})

app.post('/addcust',function(req,res){
customers.create(req,res)
})

app.get('/recent',function(req,res){
customers.recent(req,res)
})

app.get('/delete/:id', function(req, res) {
customers.remove(req, res);
})

app.get('/allorders', function(req, res) {
orders.index(req, res);
})

app.post('/addorder',function(req,res){
orders.create(req,res)
})

app.get('/allproducts', function(req, res) {
products.index(req, res);
})

app.post('/addproduct',function(req,res){
products.create(req,res)
})

};
