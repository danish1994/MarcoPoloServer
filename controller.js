const url = require('url');
const {MarcoPoloStream} = require('./service');

const handleRequest = (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const {number = 0} = queryObject;

    const readableStream = new MarcoPoloStream({number});
    readableStream.pipe(res);
};

module.exports = {handleRequest};