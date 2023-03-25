const controller = require('../app/controllers/crimes');
const routes = require('./routes');

module.exports = function (app) {
    // Use this route to get crime stats of a especific year
    app.get(routes.crimesInYear, controller.crimesInYear);
    // Use this route to get crime stats of all crimes into the database
    app.get(routes.allCrimes, controller.allCrimes);
    // Use this route only if your database is empty
    app.get(routes.fillDatabase, controller.fillDatabase);
}