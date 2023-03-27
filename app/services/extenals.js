const { getCrimes } = require("../repositories/chicago_api_repository");
const { saveCrime } = require("../repositories/crimes_repository");
const logger = require("../../utils/logger");


const formatCrimeData = crime => {
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
        let crimes; // crimes from Chicago API
        try { 
            crimes = await getCrimes(year, crimeType.toUpperCase());
        } catch (error) {
            logger.error('UNEXPECTED ERROR HAS OCCURED. ERROR: ' + error, '/app/services/extenals.js');
            return;
        } 

        let total = crimes.length;
        let savingProgress = 0;
        let successful = 0;

        for (let i = 0; i < total; i++) {
            const formatedCrimeData = formatCrimeData(crimes[i]);
            //It saves crimes into database
            let hasSaved = await saveCrime(formatedCrimeData);
            savingProgress+= 1;
            if (hasSaved) {
                successful++;
            }
            // It shows saving progess in terminal
            console.log(hasSaved ? 'SUCCESSFUL' : 'FAILURE' +
                ` || Saving Progress: %${100*(savingProgress/total)}`);
        }
        console.log('TOTAL REACHED: ' + crimes.length);
        console.log('SAVED SUCCESFULLY: ' + successful);
    }
}