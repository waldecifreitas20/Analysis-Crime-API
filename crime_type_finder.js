const axios = require('axios')
const url = 'https://data.cityofchicago.org/resource/xguy-4ndq.json?$limit=300000'



axios.get(url).then((res) => {
    const crimesType = new Set()
    
    for (const crime of res.data) {
        crimesType.add(crime.primary_type)
    }

    
    console.log(crimesType);
});