const fs = require('fs');

module.exports = {
    getFileNames: function (absolutePath) {
        return fs
            .readdirSync(absolutePath)
            .filter(name => name.indexOf('.') != -1);
    },
};