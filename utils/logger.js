module.exports = {
    info: function(message) {
        const date = new Date();
        console.log(`${date.toLocaleString()} - ${message}`);
    },

    error: function(message, location) {
        const date = new Date();
        console.log(`${date.toLocaleString()} - ${message}. ERROR PATH: ${location}`);
    }
}