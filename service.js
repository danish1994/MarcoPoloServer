const indexCache = {};
const numberCache = {};

const getIndexMapping = (i) => {
    let str = '';
    if (i % 4 === 0) {
        str += 'marco';
    }

    if (i % 7 === 0) {
        str += 'polo';
    }

    if (!str.length) {
        str += i.toString();
    }

    // Adding new line after 1000 numbers
    str += (i % 1000 === 0) ? '\n' : ' ';

    return str;
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
            result += processInputByIndex(i);
        }

        numberCache[n] = result.trim();
    }

    return numberCache[n];
};

module.exports = {processOutput};