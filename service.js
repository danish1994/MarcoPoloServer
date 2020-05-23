const {Readable} = require('stream');

class MarcoPoloStream extends Readable {
    constructor(props) {
        super(props);
        this._number = props.number;
        this._index = 1;
    }

    _read(n) {
        const i = this._index++;
        if (i >= this._number)
            this.push(null);
        else {
            this.push(this.getIndexMapping(i));
        }
        return n;
    }

    getIndexMapping(i) {
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
    }
}

module.exports = {MarcoPoloStream};