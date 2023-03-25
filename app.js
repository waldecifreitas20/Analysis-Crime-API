const express = require('express');
const app = express();

// Database connection
require('./database/connection');
const { initDatabase } = require('./database/sequelize');

// Database Synchronization
initDatabase();

const initRoutes = require('./routes/crimes');
initRoutes(app);

// Middleware for unknowns routes catching
const unknownRoutesChecker = require('./app/middlewares/unknowns');
app.use(unknownRoutesChecker);

module.exports = app