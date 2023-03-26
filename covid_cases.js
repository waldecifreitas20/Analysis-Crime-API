const axios = require('axios')

const url = 'https://data.cityofchicago.org/resource/naz8-j4nc.json?$limit=5000'

async function getCovidCasesOfMonth(month, year) {
    const currentMonth = month
    const currentYear = 2020

    axios.get(url).then(res => {
        let days = res.data;
        let cases = 0

        for (let i = 0; i < days.length - 1; i++) {
            let year = days[i].lab_report_date.split('-')[0]
            let month = days[i].lab_report_date.split('-')[1]
            if (month == currentMonth && year == currentYear) {
                cases += Number(days[i].cases_total);
            }
        }

        console.log(`${currentYear}/${currentMonth} Casos: ${cases}`);

    });
}


const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']


for (var i = 0; i < 12; i++) {
    let month = months[i].toString();
    getCovidCasesOfMonth(month);
}


