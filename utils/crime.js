const getCrimeTotal = (category = String, crimes = []) => {
    return getCrimesByCategory(category, crimes).length;
}

const getCrimesByCategory = (category = String, crimes = []) => {
    return crimes.filter(crime => crime.category.name == category);
}

const getTotalCrimeByMonth = (month = Number, crimes = []) => {
    let total = 0;
    crimes.forEach(crime => {
        const _month = crime.monthId;
        if (month == _month) {
            ++total;
        }
    });

    return total;
}

const getCategories = (crimes = []) => {
    const categories = [];

    crimes.forEach(crime => {
        const category = crime.category.name;

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
    
    return (current - past) / past;
}

module.exports = {
    getCrimesStats: function (crimes = [], period) {

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
                growth_rate: calculateGrowth(crimesByCategory, period) * 100
            };
        }

        return stats;
    },

}