const { database, Sequelize: dataType } = require('../../database/sequelize');

const Month = database.define('Months', {
    name: {
        type: dataType.STRING(9),
        allowNull: false
    },
    unity: {
        type: dataType.INTEGER,
        allowNull: false,
        unique: true,
    }
});

module.exports = Month;