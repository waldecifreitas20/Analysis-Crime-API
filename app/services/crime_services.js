const repository = require('../repositories/crimes_repository');
const stats = require('../../utils/crime');

const getQuery = params => {
    let query = 'SELECT * FROM crimes';
    let operator = 'WHERE';

    if (!!params.type) {
        query += ` ${operator} type='${params.type.toUpperCase()}'`;
        operator = 'AND';
    }

    if (!!params.year) {
        query += ` ${operator} year='${params.year}'`;
        operator = 'AND';
    }

    if (!!params.onlyDomestic) {
        query += ` ${operator} domestic='${params.onlyDomestic}'`;
        operator = 'AND';
    }

    // It is not possible search for month and period at same time
    if (!!params.month) {
        query += ` ${operator} month='${params.month}'`;

    } else if (!!params.period.start && !!params.period.end) {
        query += ` ${operator} month >= '${params.period.start}'`;
        query += ` AND month <= '${params.period.end}'`;
    }

    return query;
}

module.exports = {
    searchAll: async function (period) {
        const response = await repository.getAll(period);

        const crimeStats = stats.getAllCrimesStats(response, period);

        return {
            status: 200,
            results: response.length,
            period,
            stats: crimeStats,
        };
    },

    advancedSearch: async function (params) {
        let searchQuery = getQuery(params);
        let response = await repository.advancedSearch(searchQuery);


        let crimeStats;
        if (!!params.month) {
            const crimeStats = stats.getCrimeStatsByMonth(response, params.month);
            return {
                status: 200,
                results: crimeStats.total,
                year: params.year,
                month: Number(params.month),
                crimes: crimeStats.crimes
            };
        }
        crimeStats = stats.getCrimeStats(response, params.period);


        return {
            status: 200,
            results: response.length,
            year: params.year,
            period: params.period,
            crimes: crimeStats.crimes
        };
    },

}