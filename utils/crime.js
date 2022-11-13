const getCrimeTotal = (category = String, crimes = []) => {
    return getCrimesByCategory(category, crimes).length;
}

const getCrimesByCategory = (category = String, crimes = []) => {
    return crimes.filter(crime => crime.type == category);
}

const getTotalCrimeByMonth = (month, crimes = []) => {
    let total = 0;
    crimes.forEach(crime => {
        const _month = crime.month;
        if (month == _month) {
            ++total;
        }
    });

    return total;
}

const getCategories = (crimes = []) => {
    const categories = [];

    crimes.forEach(crime => {
        const category = crime.type;

        if (categories.indexOf(category) == -1) {
            categories.push(category);
        }
    });

    return categories;
}

const calculateMonthlyAverage = (crimes = [], period = {}) => {
    const first_month = Number(period.start);
    const last_month = Number(period.end);

    const MONTHS = (last_month - first_month + 1);
    const TOTAL_CRIMES = crimes.length
    let average = TOTAL_CRIMES / MONTHS;

    return Number(average.toFixed(2));
};

const calculateGrowth = (crimes, period) => {
    const current = getTotalCrimeByMonth(period.end, crimes);
    const past = getTotalCrimeByMonth(period.start, crimes)

    if (past == 0) {
        return current;
    }
    const growth = (current - past) / past;
    return Number((growth * 100).toFixed(2));
}

module.exports = {
    getCrimeStats: function (crimes = [], period = {}) {

        let stats = {
            total: crimes.length,

            crimes: {}
        };

        const categories = getCategories(crimes);

        // Count total of each crime
        for (const category of categories) {

            const crimesByCategory = getCrimesByCategory(category, crimes);

            stats.crimes[category] = {
                total: getCrimeTotal(category, crimes),
                first_month: getTotalCrimeByMonth(period.start, crimesByCategory),
                last_month: getTotalCrimeByMonth(period.end, crimesByCategory),
                monthly_average: calculateMonthlyAverage(crimesByCategory, period),
                growth_rate: calculateGrowth(crimesByCategory, period)
            };
        }

        return stats;
    },

    getCrimeStatsByMonth: function (crimes=[], month='') {
        let stats = {
            total: crimes.length,

            crimes: {}
        };

        // Count total of each crime
        for (const category of getCategories(crimes)) {
            stats.crimes[category] = getCrimeTotal(category, crimes);
        }

        return stats;
    },

    getAllCrimeStats: function (crimes) {
        let months = { start: '01', end: '12' };
        return {
            first_month: getTotalCrimeByMonth(months.start, crimes),
            last_month: getTotalCrimeByMonth(months.end, crimes),
            monthly_average: calculateMonthlyAverage(crimes, months),
            growth_rate: calculateGrowth(crimes, months)
        }
    }

}