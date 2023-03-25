const { database, Sequelize: dataType } = require('../../database/sequelize');

const Crime = database.define('crimes', {
    type: {
        type: dataType.STRING(20),
        allowNull: false,
    },
    year: {
        type: dataType.STRING(4),
        allowNull: false,
    },
    month: {
        type: dataType.STRING(10),
        allowNull: false,
    },
    domestic: {
        type: dataType.BOOLEAN,
        allowNull: false,
    },
    case_id: {
        type: dataType.STRING(10),
        unique: true,
    },
});

module.exports = Crime;