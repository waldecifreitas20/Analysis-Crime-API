const { database, Sequelize: dataType } = require('../../database/sequelize');

const Category = database.define('Categories', {
    name: {
        type: dataType.STRING(30)
    }
})

module.exports = Category;