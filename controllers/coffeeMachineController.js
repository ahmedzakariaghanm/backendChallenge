var coffeeMachine        = require("../models/coffeeMachine");

exports.setCoffeeMachine = (req, res)=> {
    coffeeMachine.create(req.body,(err,my)=>{
    if(err){
        console.log(err.message)
        return res.status(400).json({'msg':err.message})
    }   
    else{
        return res.status(201).json(my)
    }
    });
}

exports.getMachines = (req,res)=>{
    coffeeMachine.find({},(err,machines)=>{
        if(err){
            console.log(err.message)
            return res.status(400).json({'msg':err.message})
        }
    if(req.query.product_type != undefined && req.query.product_type != "") machines = machines.filter(o => o.product_type.toLowerCase().includes(req.query.product_type.toLowerCase()));
    if(req.query.water_line != undefined && req.query.water_line != "")
     {
         if('true' == req.query.water_line)machines = machines.filter(o => o.water_line_compatible == true );
         else machines = machines.filter(o => o.water_line_compatible == false );
     }
    res.header("Content-Type",'application/json');
    return res.status(201).send(JSON.stringify(machines, null, 4));
    })
}