const Validator = require("./validator");

class CommandHandler {
    constructor (reader, tasks) {
        this._reader = reader;
        this._tasks = tasks;
        this._validator = new Validator();
    }
}

module.exports = CommandHandler;
