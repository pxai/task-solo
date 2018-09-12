const readline = require("readline");

class Console {
  constructor() {
  }  

  init () {
    this._readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
  }

  read (question = "") {
    return new Promise((resolve) => {
          this._readLine.question(question, (data) => { resolve(data) })
    });
  }
}

module.exports = Console;
