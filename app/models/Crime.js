const { database, Sequelize: dataType } = require('../../database/sequelize');

const Crime = database.define('Crimes', {
    category: {
        type: dataType.STRING(30),
        allowNull: false
    },
    latitude: {
        type: dataType.FLOAT(11)
    },
    longitude: {
        type: dataType.FLOAT(11)
    },
    year: {
        type: dataType.INTEGER
    },
    month: {
        type: dataType.INTEGER
    }
});

module.exports = Crime;