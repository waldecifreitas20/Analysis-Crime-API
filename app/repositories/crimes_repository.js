const Crime = require('../models/Crime');
const { Op } = require('sequelize');
const logger = require('../../utils/logger');

module.exports = {

    getAllInAPeriod: async function (period) {
        try {
            return await Crime.findAll({
                where: {
                    year: { [Op.between]: [period.start, period.end], }
                },
            });
        } catch (error) {
            logger.info(error);
            return false;
        }
    },

    saveCrime: async function (crime) {
        try {
            await Crime.create(crime); // creates a new object into the database
            return true;
        } catch (error) {
            return false;
        }
    },

    executeQuery: async function (query) {
        try {
            const { database } = require('../../database/sequelize');
            const [result, metadata] = await database.query(query);

            return result;
        } catch (error) {
            logger.info(error);
            return false;
        }
    }
}