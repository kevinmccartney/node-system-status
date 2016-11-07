'use strict';
const request = require('request');

const urls = ["https://kevinmccartney.is", "https://carmentang.co"];

const ping = (url) => {
    request(url, (error, response, body) => {
        var res = [];
        res.push(url + ": " + response.statusCode);
        console.log(res);
    });
};

const resList = () => {
    for (let url of urls) {
        ping(url);
    }
};

resList();
