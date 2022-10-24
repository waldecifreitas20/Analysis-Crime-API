const repository = require('../repositories/crimes_repository');

const MONTH_SEARCH = 0;
const PERIOD_SEARCH = 1;
const GENERIC_SEARCH = 2;

const getSearchMode = searchParams => {

    if (searchParams.month != undefined) {
        return MONTH_SEARCH;
    }
    if (!!searchParams.period.start || !!searchParams.period.end) {
        return PERIOD_SEARCH;
    }

    return GENERIC_SEARCH;
}


module.exports = {
    searchEspecificCrime: async function (params) {
        return {
            status: 200,
            response: getSearchMode(params)
        };
    },

    searchAll: async function (params) {
        let response;

        const searchMode = getSearchMode(params);

        if (searchMode == MONTH_SEARCH) {
            response = await repository.getAllOfMonth(params.month, params.year);
        } else if (searchMode == GENERIC_SEARCH) {
            response = await repository.getAllOfYear(params.year);
        }

        return {
            status: 200,
            crimes: response
        };
    },

}