const repository = require('../repositories/crimes_repository');
const stats = require('../../utils/crime');
const logger = require('../../utils/logger');

/* 
    it checks params which are not null to build the transaction. 
*/
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

    /* 
    It is not possible to search for a month and period at same time.
    When a month value is not null, then it is considered instead of a period
    */

    if (!!params.month) {
        query += ` ${operator} month='${params.month}'`;

    } else if (!!params.period.start && !!params.period.end) {
        query += ` ${operator} month >= '${params.period.start}'`;
        query += ` AND month <= '${params.period.end}'`;
    }

    return query;
}

module.exports = {

    // It searchs general stats of all crimes together during a period of years
    searchGeneralStats: async function (period) {
        const repositoryResponse = await repository.getAllInAPeriod(period);
        const crimeStats = stats.getGeneralStats(repositoryResponse, period);

        return {
            status: 200,

            period,
            stats: crimeStats,
        };
    },

    searchCrimesStatsInMonth: async function (params) {
        let query = getQuery(params);
        let repositoryResponse = await repository.executeQuery(query);

        const crimeStats = stats.getCrimeStatsByMonth(
            repositoryResponse,
            params.month
        );

        return {
            status: 200,
            results: crimeStats.total,
            year: params.year,
            month: Number(params.month),
            crimes: crimeStats.crimes
        };
    },

    // It searchs stats of each crimes during a month or more in a year
    searchCrimeStatsInAPeriod: async function (params) {
        let query = getQuery(params);

        let repositoryResponse = await repository.executeQuery(query);

        let crimeStats = stats.getCrimeStats(repositoryResponse, params.period);

        return {
            status: 200,
            results: repositoryResponse.length,
            year: params.year,
            period: params.period,
            crimes: crimeStats.crimes

        };

    },

}