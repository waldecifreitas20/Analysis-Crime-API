const { getCrimes } = require("../repositories/police_api_repository");
const { saveCrime } = require("../repositories/crimes_repository");


const formatCrime = crime => {
    return {
        type: crime.primary_type,
        year: crime.year,
        month: getMonth(crime),
        domestic: crime.domestic,
        case_id: crime.case_number
    }
}

const getMonth = crime => crime.date.split('-')[1];

module.exports = {
    fillDatabase: async function (year, crimeType) {
        let success = true;
        let crimes;

        try {
            crimes = await getCrimes(year, crimeType.toUpperCase());
        } catch (error) {
            console.log('Unexpected error ocurred. Wait few minutes and try again');
            return;
        }

        //It saves crimes into database
        let total = crimes.length;
        let progress = 0;
        let successful = 0;

        for (let i = 0; i < total; i++) {
            const formatedCrime = formatCrime(crimes[i]);
            success = await saveCrime(formatedCrime);
            progress++;
            if (success) {
                successful++;
            }
            console.log(success + ' || Saving progress: (%)' + (progress / total) * 100);
        }
        console.log('Expected: ' + crimes.length);
        console.log('Successful: ' + successful);

        return {
            status: success ? 200 : 400,
            success,
        };
    }
}