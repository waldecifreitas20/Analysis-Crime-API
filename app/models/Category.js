const { database, Sequelize: dataType } = require('../../database/sequelize');

const Category = database.define('categories', {
    name: {
        type: dataType.STRING(30)
    }
})

module.exports = Category;