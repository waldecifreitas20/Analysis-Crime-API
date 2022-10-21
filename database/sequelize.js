const dbConfig = require('../config/database');
const Sequelize = require('sequelize');

const database = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        logging: false,
        define: {
            timestamps: false,
            underscored: false,
            underscoredAll: false,
            freezeTableName: true
        }
    }
);

const syncDatabase = async () => await database.sync();

module.exports = {
    Sequelize,
    database,
    syncDatabase
}
