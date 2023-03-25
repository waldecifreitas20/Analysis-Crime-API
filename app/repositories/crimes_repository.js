const Crime = require('../models/Crime');
const { Op } = require('sequelize');

module.exports = {

    getAllInAPeriod: async function (period) {
        try {
            return await Crime.findAll({
                where: {
                    year: { [Op.between]: [period.start, period.end], }
                },
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    saveCrime: async function (crime) {
        try {
            await Crime.create(crime);
            return true;
        } catch (error) {
            return false;
        }
    },

    executeQuery: async function (query) {
        try {
            const { database } = require('../../database/sequelize');
            const [result, metadata] = await database.query(query);
            //console.log(result);
            return result;
        } catch (error) {
              console.log(error);
            return false;
        }
    }
}