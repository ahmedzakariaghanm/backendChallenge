var express              = require('express'),
    routes               = express.Router();
    coffeeMachineController = require('./controllers/coffeeMachineController');
    coffeePodController = require('./controllers/coffeePodController')
routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
});
// Coffee Machine End Points
routes.post('/setCoffeeMachine',coffeeMachineController.setCoffeeMachine);
routes.get('/getCoffeeMachine',coffeeMachineController.getMachines);

// Coffee Pod End Points 
routes.post('/setCoffeePod',coffeePodController.setCoffeePod);
routes.get('/getCoffeePod',coffeePodController.getPods);


module.exports = routes;