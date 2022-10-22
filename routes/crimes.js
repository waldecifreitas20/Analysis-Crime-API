const controller = require('../app/controllers/crimes');
const routes = require('./routes');

module.exports = function (app) {

    app.get(routes.fillDatabase, controller.fillDatabase);
    app.get(routes.crimes.allCrimes, controller.search);
    app.get(routes.crimes.especificCrime, controller.search);

}