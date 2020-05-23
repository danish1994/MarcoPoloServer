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

const processOutput = (n, res) => {
    for (let i = 1; i <= n; i++) {
        // Pick up from Cache in the result.
        let output = resultMapping[i];
        if (!output) {
            output = processOutputByIndex(i);
            // Caching Back the result.
            resultMapping[i] = output;
        }
        res.write(output + ' ');
    }
};

module.exports = {processOutput};