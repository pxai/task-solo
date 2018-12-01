class Validator {
    constructor () {
    }

    isEmpty (text) {
        return text.trim() === "";
    }
}

module.exports = Validator;
