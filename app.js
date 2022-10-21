const express = require('express');
const app = express();

const {syncDatabase} = require('./database/sequelize');
require('./database/connection');

syncDatabase();

module.exports = app