const fs = require('fs');
const {resolve} = require('path');

module.exports = {
    getFileNames: function (absolutePath) {
        return fs
            .readdirSync(absolutePath)
            .filter(name => name.indexOf('.') != -1);
    },
    getAboslutePath: resolve
};