const readline = require("readline");

class Console {
  constructor() {
    this.init();
  }  

  init () {
    this._readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  }

  read (questionText = "") {
    return new Promise((resolve) => {
          this._readLine.question(questionText, (data) => resolve(data))
    });
  }
}

module.exports = Console;
