var coffeePod       = require("../models/coffeePod");

exports.setCoffeePod = (req, res)=> {
    coffeePod.create(req.body,(err,my)=>{
    if(err){
        console.log(err.message)
        return res.status(400).json({'msg':err.message})
    }   
    else{
        return res.status(201).json(my)
    }
    });
}

exports.getPods = (req,res)=>{
    coffeePod.find({},(err,pods)=>{
        if(err){
            console.log(err.message)
            return res.status(400).json({'msg':err.message})
        }
    if(req.query.product_type != undefined && req.query.product_type != "") pods = pods.filter(o => o.product_type.toLowerCase().includes(req.query.product_type.toLowerCase()));
    if(req.query.coffee_flavor != undefined && req.query.coffee_flavor != "") pods = pods.filter(o => o.coffee_flavor.toLowerCase().includes(req.query.coffee_flavor.toLowerCase()));
    if(req.query.pack_size != undefined && req.query.pack_size != "") pods = pods.filter(o => o.pack_size == req.query.pack_size );
    res.header("Content-Type",'application/json');
    return res.status(201).send(JSON.stringify(pods, null, 4));
    })
}