const controller = require('../app/controllers/crimes');

module.exports = function(app) {
    app.get('/fill-database', controller.fillDatabase);
    app.get('/search', controller.search);
}