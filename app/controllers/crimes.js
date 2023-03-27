const logger = require('../../utils/logger');
const services = require('../services/crime_services');
const extenalServices = require('../services/extenals');


module.exports = {
    fillDatabase: async function (req, res) {
        const year = req.params.year;
        const type = req.params.type;

        //Reach data from Chicago API and fill it into the database 
        extenalServices.fillDatabase(year, type);

        console.log('\nWAITING FOR REQUESTS\n');
        return res.status(200).send({
            message: 'Request created. It has already been filling the database'
        });


    },

    crimesInYear: async function (req, res) {
        const searchingParams = {
            onlyDomestic: req.query.domestic,
            type: req.query.type,
            year: req.query.year || 2022,
            month: req.query.month,
            period: {
                start: req.query.start_month || '01',
                end: req.query.end_month || '12',
            }
        };

        let response;
  
        // Verify if it is searching a especific month or a set of them
        if (searchingParams.month != null) {
            logger.info('SEARCHING FOR CRIMES STATS IN MONTH');
            response = await services.searchCrimesStatsInMonth(searchingParams);
        } else {
            logger.info('SEARCHING FOR CRIMES STATS IN A PERIOD');
            response = await services.searchCrimeStatsInAPeriod(searchingParams);
        }

        logger.info('RESPONSE SENT WITH HTTP STATUS ' + response.status);
        console.log('\nWAITING FOR REQUESTS\n');
        return res.status(200).send(response);
    },

    allCrimes: async function (req, res) {
        const period = {
            start: req.query.initial_year || '2019',
            end: req.query.final_year || '2022',
        };

        logger.info(`SEARCHING FOR CRIMES STATS FROM ${period.start} TO ${period.end}`);
        const response = await services.searchGeneralStats(period);

        logger.info('RESPONSE SENT WITH HTTP STATUS ' + response.status);
        console.log('\nWAITING FOR REQUESTS\n');
        return res.status(response.status).send(response);
    }
}