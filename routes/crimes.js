const router = require('express').Router();

const controller = require('../app/controllers/crimes');

router.get('/fill-database', controller.fillDatabase);
router.get('/search', controller.search);

module.exports = function(app) {
    app.use('/crimes', router);
}