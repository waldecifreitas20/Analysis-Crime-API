const services = require('../services/crime_services');


module.exports = {
    fillDatabase: async function(req, res) {
        return res.status(200).send({url : req.url});
    },
    
    especificCrime : async function(req, res) {
        const searchParams = {
            category : req.query.crime,
            year: req.query.year || 2020,
        }
        return res.status(200).send({url : req.url});
    },

    allCrimes : async function(req, res) {
        const searchParams = {
            category : req.query.crime,
            year: req.query.year || 2020,
        }
        return res.status(200).send({url : req.url});
    },
}