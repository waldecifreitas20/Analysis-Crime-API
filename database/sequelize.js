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
        }
    }
);

const initModels = () => {
    const modelPaths = require('../app/models');

    modelPaths.forEach(path => {
        require(path);
    });
};
const syncDatabase = async () => await database.sync();

const initDatabase = async () => {
    initModels();
    await syncDatabase();
}

module.exports = {
    Sequelize,
    database,
    initDatabase
}
