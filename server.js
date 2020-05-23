const http = require('http');
const {handleRequest} = require('./controller');


// We have 1 route so we didn't create proper router.
const server = () => {
    http
        .createServer(handleRequest)
        .listen(3000);
};

module.exports = {server};