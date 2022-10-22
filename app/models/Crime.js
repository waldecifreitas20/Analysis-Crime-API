const { database, Sequelize: dataType } = require('../../database/sequelize');

const Crime = database.define('Crimes', {
    latitude: {
        type: dataType.FLOAT(11)
    },
    longitude: {
        type: dataType.FLOAT(11)
    },
    year: {
        type: dataType.INTEGER
    }
});


const Month = require('./Month');
const Category = require('./Category');

Crime.belongsTo(Month);
Crime.belongsTo(Category);


module.exports = Crime;