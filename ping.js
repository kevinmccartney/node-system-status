'use strict';
const request = require('request');

const nodes = ["https://kevinmccartney.is", "https://carmentang.co"];

var pingNode = (node) => {
    request(node, (error, response, body) => {
        var results = [];
        results.push(node + ": " + response.statusCode);
        console.log(results);
    });
};

const pingAll = () => {
    for (let node of nodes) {
        pingNode(node);
    }
};

pingAll();
