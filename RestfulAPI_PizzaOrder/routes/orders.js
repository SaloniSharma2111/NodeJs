var express = require('express');
var router = express.Router();

var Order = require('../models/order');
var calculator= require('../pricecalculator');

router.get('/', function(req, res){
   res.render('index', {'title' : 'Place Order'});
});

router.get('/orders', function(req, res){
    res.render('orders', {'title' : 'Course Listing'});
})

//REST API
router.get('/api/orders', function(req, res){
      console.log('here');
      var params= req.params;
      console.log(params.length);
     Order.find({}, function(err, orders) {
        res.json(orders);
    })

});



router.post('/api/orders', function(req, res){
   var order = new Order(req.body);
   console.log('Order');
   var pizzCost;
   var pizBase;
   var vegtoppin;
   var nonvegtoppin;
   if(order.pizzaSize=="9 Inch Small")
   {
       pizzCost=order.smallPizzaCost;
   }
   else if(order.pizzaSize=="12 Inch Medium")
   {
       pizzCost= order.mediumPizzaCost;
   }
   else if(order.pizzaSize=="14 Inch Large")
   {
       pizzCost= order.largePizzaCost;
   }
   if(order.crustType=="Stuffed Crust")
   {
        pizBase=order.stuffedCrustCost;
   }
   else
   {
       pizBase=0;
   }
   if(order.vegToppings.length>0)   
   {vegtoppin= (order.vegToppings.length)* order.vegtoppingsCost;}
   else
   { vegtoppin=0;}
   if(order.nonvegToppings.length>0)
   {nonvegtoppin= (order.nonvegToppings.length)* order.nonvegtoppingsCost;}
   else{
       nonvegtoppin=0;
   }
   
   var orderTotal= new calculator(pizzCost,pizBase,vegtoppin, nonvegtoppin,order.quantity);
   var total= orderTotal.calculate();
   console.log(total);
   order.save(function(err){
       console.log(err);
       console.log(req.body);
        res.json({msg: "success", ordrTotal:total});
   });      
});

module.exports = router;