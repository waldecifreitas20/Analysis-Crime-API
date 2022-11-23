const controller = require('../app/controllers/crimes');
const routes = require('./routes');
const paramsValidator = require('../app/middlewares/validator');

module.exports = function (app) {

    app.get(routes.advancedSearch, paramsValidator, controller.advancedSearch);
    app.get(routes.allCrimes, paramsValidator, controller.allCrimes);

    // Use this route if your database is empty
    app.get(routes.fillDatabase, controller.fillDatabase);
}