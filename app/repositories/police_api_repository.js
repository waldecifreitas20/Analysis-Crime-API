let API_URL = process.env.CHICAGO_API_URL;
const axios = require('axios');


module.exports = {

    getCrimes: async function (year = 2022, crimeType) {
        API_URL = `${API_URL}?year=${year}&&$limit=300000&&$where=primary_type like '${crimeType}'`;

     

        console.log('Request opened');
        console.log('Reaching Chigago API for crimes data');
        let crimes = [];
        await axios.get(API_URL).then(res => {
            crimes = res.data;
        });
        console.log('Search has ended');

        return crimes;


    }
}