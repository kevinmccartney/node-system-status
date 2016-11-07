const util = require('util');
const os = require('os');
const console = require('console');
const moment = require('moment');
const bytes = require('bytes');

const reportTime = () => {
    return 'Report generated at ' + moment().format('MMMM Do YYYY, H:mm:ssa');
};

const uptime = () => {
    let duration = moment.duration(os.uptime(), 'seconds');
    let units = ['days', 'hours', 'minutes', 'seconds'];

    let uptime = units.map(unit => {
        return duration.get(unit) + ' ' + unit;
    });

    return uptime;
}

const memory = () => {
    let memFree = bytes(os.freemem());
    let memTotal = bytes(os.totalmem());
    return memFree + '/' + memTotal;
};

const main = () => {
    return {
        "uptime": uptime(),
        "memFree": memory(),
        "reportTime": reportTime()
    };
};

console.log(util.inspect(main()));
