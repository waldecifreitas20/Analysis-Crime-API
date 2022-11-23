const services = require('../services/crime_services');
const extenalServices = require('../services/extenals');


module.exports = {
    fillDatabase: async function (req, res) {
        const year = req.query.year;
        const type = req.params.type;

        extenalServices.fillDatabase(year, type);

        return res.status(200).send({
            message: 'Request created. It has already been filling the database'
        });
    },

    advancedSearch: async function (req, res) {
        const searchParams = {
            onlyDomestic: req.query.domestic,
            type: req.query.type,
            year: req.query.year || 2022,
            month: req.query.month,
            period: {
                start: req.query.start_month || '01',
                end: req.query.end_month || '12',
            }
        };

        let response = await services.advancedSearch(searchParams);
        return res.status(200).send(response);
    },

    allCrimes: async function (req, res) {
        const period = {
            start: req.query.start_year || '2019',
            end: req.query.end_year || '2022',
        };
        const response = await services.searchAll(period);
        return res.status(response.status).send(response);
    }
}