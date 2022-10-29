const Crime = require('../models/Crime');
const Category = require('../models/Category');
const Month = require('../models//Month');
const { Op } = require('sequelize');

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
    },

    getAllOfMonth: async function(month, year) {
        try {
            const crimes = await Crime.findAll({
                where: {
                    year: year,
                    monthId: month,
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
    },

    getAllAtPeriod : async function(period, year) {
        try {
            const crimes = await Crime.findAll({
                where : {
                    year : year, 
                    monthId: {[Op.between] : [period.start, period.end]}   
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