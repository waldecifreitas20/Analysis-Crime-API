const services = require('../services/crime_services');


module.exports = {
    fillDatabase: async function(req, res) {
        return res.status(200).send({url : req.url});
    },
    
    searchCrimes : async function(req, res) {
        const searchParams = {
            category: req.params.category,
            year: req.query.year || 2021,
            month : req.query.month,
            period : {
                start : req.query.start_month,
                end : req.query.end_month,
            }
        }

        let response;

        if (!searchParams.category) {
            response = await services.searchAll(searchParams);
        } else {
            response = await services.searchEspecificCrime(searchParams);
        }

        return res.status(200).send(searchParams);
    },
}