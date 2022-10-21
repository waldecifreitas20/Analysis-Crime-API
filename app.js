const express = require('express');
const app = express();

const {initDatabase} = require('./database/sequelize');
require('./database/connection');

initDatabase();

module.exports = app