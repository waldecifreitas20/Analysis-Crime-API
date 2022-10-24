const Crime = require('../models/Crime');
const Category = require('../models/Category');
const Month = require('../models//Month');

module.exports = {

    getAllOfYear: async function (year) {
        try {
            const crimes = await Crime.findAll({
                where: {
                    year: year
                },
                include: [Category, Month]
            });

            return crimes;
        } catch (error) {
            return {
                status : 400,
                error : error
            }
        }
    }
}