const util = require('util');
const os = require('os');
const console = require('console');
const moment = require('moment');

const time = () => {
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

const main = () => {
    return {
        "uptime": uptime(),
        "time": time()
    };
};

console.log(util.inspect(main()));
