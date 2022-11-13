let API_URL = process.env.CHICAGO_API_URL;
const axios = require('axios');


module.exports = {

    getCrimes: async function (year = 2022, crimeType) {
        API_URL = `${API_URL}?year=${year}&&$limit=300000&&$where=primary_type like '${crimeType}'`;

        const crimes = [];

        console.log('Request opened');
        console.log('Reaching Chigago API for crimes data');
        let response = [];
        await axios.get(API_URL).then(res => {
            response = res.data;
        });
        console.log('Search has ended');

        let progress = 0;
        response.forEach(crime => {
            if (crime.primary_type.toUpperCase().indexOf('THEFT') != -1) {
                crimes.push(crime);
            } else if (crime.primary_type.toUpperCase().indexOf('ROBBERY') != -1) {
                crimes.push(crime);
            } else if (crime.primary_type.toUpperCase().indexOf('BURGLARY') != -1) {
                crimes.push(crime);
            } else if (crime.primary_type.toUpperCase().indexOf('SEXUAL') != -1) {
                crimes.push(crime);
            } else if (crime.primary_type.toUpperCase().indexOf('HOMICIDE') != -1) {
                crimes.push(crime);
            }

            progress++;
            console.log(`COUNTING PROGRESS ${(progress / response.length) * 100}`);
        });

        return crimes;


    }
}