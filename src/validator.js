class Validator {
    constructor (cancelChar = ".") {
        this._cancelChar = cancelChar;
    }

    isEmpty (text) {
        return text.trim() === "";
    }

    isNotCancel (text) {
        return text !== this._cancelChar;
    }

    isNotValidId(number, validNumbers) {
        return !validNumbers.includes(+number);
    }
}

module.exports = Validator;
