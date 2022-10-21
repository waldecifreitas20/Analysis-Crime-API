const {database} = require('./sequelize');

database.authenticate()
.then(()=> {
    console.log('DATABASE HAS CONNECTED');
})
.catch(()=> {
    console.log('DATABASE CONNECTION HAS REFUSED');
});
