module.exports = {
    fillDatabase: async function(req, res) {
        return res.status(200).send({url : req.url});
    },
    
    search : async function(req, res) {
        return res.status(200).send({url : req.url});
    }
}