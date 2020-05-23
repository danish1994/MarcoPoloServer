const url = require('url');
const {processOutput} = require('./service');

const handleRequest = (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const {number = 0} = queryObject;
    res.write(processOutput(number));
    res.end('\n');
};

module.exports = {handleRequest};