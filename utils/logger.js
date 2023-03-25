module.exports = {
    info: function(message) {
        const date = new Date();
        console.log(`${date.toLocaleString()} - ${message}`);
    },
}