const { database, Sequelize: dataType } = require('../../database/sequelize');

const Crime = database.define('crimes', {
    latitude: {
        type: dataType.FLOAT(11)
    },
    longitude: {
        type: dataType.FLOAT(11)
    },
    year: {
        type: dataType.STRING(4)
    }
});


const Month = require('./Month');
const Category = require('./Category');

Crime.belongsTo(Month);
Crime.belongsTo(Category);


module.exports = Crime;