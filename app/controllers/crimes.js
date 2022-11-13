const services = require('../services/crime_services');
const extenalServices = require('../services/extenals');


module.exports = {
    fillDatabase: async function (req, res) {
        const year = req.query.year;
        const type = req.query.type;

        extenalServices.fillDatabase(year, type);

        return res.status(200).send({ message: 'Request created. It has already filling the database' });
    },

    searchCrimes: async function (req, res) {
        const searchParams = {
            onlyDomestic: req.query.domestic,
            type: req.params.type,
            year: req.query.year || 2021,
            month: req.query.month,
            period: {
                start: req.query.start_month,
                end: req.query.end_month,
            }
        }

        let response;

        const IS_ESPECIFIC_CRIME_SEARCH = searchParams.category;
        
        if (IS_ESPECIFIC_CRIME_SEARCH) {
            response = await services.searchEspecificCrime(searchParams);
        } else {
            response = await services.searchAll(searchParams);
        }

        return res.status(200).send(response);
    },
}