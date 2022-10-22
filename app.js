const express = require('express');
const app = express();

require('./database/connection');
const { initDatabase } = require('./database/sequelize');

initDatabase();

const initRoutes = require('./routes/crimes');
initRoutes(app);

const unknownRoutesChecker = require('./app/middlewares/unknowns');
app.use(unknownRoutesChecker);

module.exports = app