var mongoose = require('mongoose');
var coffeeMachineSchema = new mongoose.Schema({
    product_type:{
        type:String,
        required: true
    },
    water_line_compatible:{
        type:Boolean,
        required: true,
        default: false,

    },
    model:{
        type:String,
        required: true
    },
    code:{
        type:String,
        required: true
    }

});
module.exports = mongoose.model('coffeeMachine', coffeeMachineSchema);
