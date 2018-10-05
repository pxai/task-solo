const readline = require("readline");

class Console {
    init () {
        this._readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    read (questionText = "") {
        this.init();
        return new Promise((resolve) => {
            this._readLine.question(questionText, (data) => {
                this._readLine.close();
                return resolve(data);
            });
        });
    }
}

module.exports = Console;
