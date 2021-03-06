const readline = require("readline");

class Console {
    constructor () {
        this.init();
    }

    init () {
        this._readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

   async read (questionText = "") {
        return new Promise((resolve) => {
            this._readLine.question(questionText, (data) => {
                return resolve(data);
            });
        });
    }

    close () {
        this._readLine.close();
    }
}

module.exports = Console;
