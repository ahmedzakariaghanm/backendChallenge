var mongoose = require('mongoose');
var coffeePodSchema = new mongoose.Schema({
    product_type:{
        type:String,
        required: true
    },
    coffee_flavor:{
        type:String,
        required: true
    },
    pack_size:{
        type:Number,
        required: true
    },
    code:{
        type:String,
        required: true
    }

});
module.exports = mongoose.model('coffeePod', coffeePodSchema);
