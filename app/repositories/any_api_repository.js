/* 
    THIS FILE IS A TEMPLATE TO FOLLOW. IF YOU DO NOT WANT TO USE DATA COMING FROM CHICAGO
    USE THIS FILE.
    STEPS:
        1. REPLACE 'URL' FOR THE ONE YOUR WANT. EX: https://mydataset.com/api/data.json
        2. REPLACE ATRIBUTES AT FUNCTION 'formatCrimeData'. 
            EX:  type: crime.type,
            year: crime.date.year,
            month: crime.date.month,
            domestic: false,
            case_id: crime.id

        3. GO TO FILE externals.js
        4. REPLACE THIS LINE:
            
            const CRIMES_API = require("../repositories/chicago_api_repository");
            
            FOR THIS ONE:
            
            const CRIMES_API = require("../repositories/any_api_repository");

        5. NOW YOU CAN FIIL YOUR DATABASE WITH DATA FROM THE DATASET YOU HAVE CHOSEN

*/

module.exports = {

    getCrimes: async function (year = 2022, crimeType) {
        const URL = `PLACE HERE THE URL OF YOUR DATASET`;

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
            type: 'robbery',
            year: '2015',
            month: '06',
            domestic: false,
            case_id: 'KVE9-V402'
        }
    },


}