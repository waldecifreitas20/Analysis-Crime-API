const API_URL = process.env.CHICAGO_API_URL;
const axios = require('axios');

const getMonth = crime => {
    return crime.date.split('-')[1];
} 

module.exports = {

    getCrimes: async function (year = 2022, crimeType) {
        const URL = `${API_URL}?year=${year}&&$limit=300000&&$where=primary_type like '${crimeType}'`;

        console.log('Request opened');
        console.log('Reaching Chigago API for crimes data');
        let crimes = [];
        await axios.get(URL).then(res => {
            crimes = res.data;
        }).catch(err => {
            console.log(err);
        });
       
      
        console.log('Search has ended');

        return crimes;


    },

    formatCrimeData: function (crime) {
        return {
            type: crime.primary_type,
            year: crime.year,
            month: getMonth(crime),
            domestic: crime.domestic,
            case_id: crime.case_number
        }
    },
    
   
}