const http = require('http');
const url = require('url');

const resultMapping = {};

const processOutputByIndex = (i) => {
    if (i % 7 === 0 && i % 4 === 0) {
        return 'marcopolo';
    }

    if (i % 4 === 0) {
        return 'marco';
    }

    if (i % 7 === 0) {
        return 'polo';
    }

    return i.toString();
};

const processOutput = ( n, res) => {
    for (let i = 1; i <= n; i++) {
        let output = resultMapping[i];
        if (!output) {
            output = processOutputByIndex(i);
            resultMapping[i] = output;
        }
        res.write(output + ' ');
    }
};

http
    .createServer((req, res) => {
        const queryObject = url.parse(req.url, true).query;
        const {number = 0} = queryObject;
        processOutput(number, res);
        res.end('\n');
    })
    .listen(3000);