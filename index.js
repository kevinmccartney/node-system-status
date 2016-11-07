const console = require('console');
const moment = require('moment');

const time = () => {
    return 'Report generated at ' + moment().format('MMMM Do YYYY, H:mm:ssa');
};

const main = () => {
    return time();
};

console.log(main());
