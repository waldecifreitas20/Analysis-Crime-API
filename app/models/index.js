const { getFileNames, getAboslutePath } = require('../../utils/utils');
const modelsPath = getAboslutePath('app', 'models');

const filenames = getFileNames(modelsPath)
    .filter(model => model != 'index.js');

let absolutePaths = [];

for (const filename of filenames) {
    const path = `${modelsPath}/${filename}`;

    absolutePaths.push(path);
}

module.exports = absolutePaths;
