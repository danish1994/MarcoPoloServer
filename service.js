const indexCache = {};
const numberCache = {};

const getIndexMapping = (i) => {
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

const processInputByIndex = (i) => {
    if (!indexCache[i]) {
        indexCache[i] = getIndexMapping(i);
    }
    return indexCache[i];
};

const processOutput = (n) => {
    if (!numberCache[n]) {
        let result = '';
        for (let i = 1; i <= n; i++) {
            // Adding new line after 1000 numbers
            result += (processInputByIndex(i) + ((i % 1000 === 0) ? '\n' : ' '));
        }

        numberCache[n] = result;
    }

    return numberCache[n];
};

module.exports = {processOutput};