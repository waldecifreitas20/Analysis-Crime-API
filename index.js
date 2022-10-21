const server = require('./app');
const PORT = process.env.PORT

server.listen(PORT, async () => {
    console.log('SERVER ONLINE AT PORT ' + PORT);
});