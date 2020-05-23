const http = require('http');
const url = require('url');
const {processOutput} = require('./controller');

const server = () => {
    http
        .createServer((req, res) => {
            const queryObject = url.parse(req.url, true).query;
            const {number = 0} = queryObject;
            processOutput(number, res);
            res.end('\n');
        })
        .listen(3000);
};

module.exports = {server};