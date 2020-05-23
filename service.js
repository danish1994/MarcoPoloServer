const indexCache = {};
const numberCache = {};

const getIndexMapping = (i) => {
    if (!indexCache[i]) {
        if (i % 7 === 0 && i % 4 === 0) {
            indexCache[i] = 'marcopolo';
        }

        if (i % 4 === 0) {
            indexCache[i] = 'marco';
        }

        if (i % 7 === 0) {
            indexCache[i] = 'polo';
        }

        indexCache[i] = i.toString();
    }

    return indexCache[i];
};

const processOutput = (n) => {
    if (!numberCache[n]) {
        let result = '';
        for (let i = 1; i <= n; i++) {
            // Adding new line after 1000 numbers
            result += (getIndexMapping(i) + ((i % 1000 === 0) ? '\n' : ' '));
        }

        numberCache[n] = result;
    }

    return numberCache[n];
};

module.exports = {processOutput};