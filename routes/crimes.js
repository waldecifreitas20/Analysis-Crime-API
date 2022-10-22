const controller = require('../app/controllers/crimes');
const routes = require('./routes');

module.exports = function (app) {
    // Use this route if your database is empty
    app.get(routes.fillDatabase, controller.fillDatabase);
    
    //routes for searching only one crime
    app.get(routes.crimes.allCrimesYear, controller.allCrimes);
    app.get(routes.crimes.allCrimesMonth, controller.allCrimes);
    app.get(routes.crimes.allCrimesAtPeriod, controller.allCrimes);
    
    //routes for searching all crimes
    app.get(routes.crimes.crimeYear, controller.especificCrime);
    app.get(routes.crimes.crimeMonth, controller.especificCrime);
    app.get(routes.crimes.crimeAtPeriod, controller.especificCrime);

}