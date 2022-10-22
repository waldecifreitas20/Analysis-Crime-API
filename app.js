const express = require('express');
const app = express();

require('./database/connection');
const { initDatabase } = require('./database/sequelize');

initDatabase();

const initRoutes = require('./routes/crimes');
initRoutes(app);

module.exports = app