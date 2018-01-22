var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var orderSchema = new Schema({
     pizzaSize: {type: String},
     crustType: {type:String},
     vegToppings: {type:[String]},
     nonvegToppings: {type:[String]},
     quantity:{type:Number},
    vegtoppingsCost:{type:Number, default:1.75},
    nonvegtoppingsCost:{type:Number, default:2.75},
    smallPizzaCost:{type:Number, default:10},
    mediumPizzaCost:{type:Number, default:15},
    personalPizzaCost:{type:Number, default:20},
    largePizzaCost:{type:Number, default:22},
    stuffedCrustCost:{type:Number, default:3.50},
    phone:{type:String, required:true},
    address:{type:String, required:true}

});


module.exports = mongoose.model('Order', orderSchema);