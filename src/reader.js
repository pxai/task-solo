const Validator = require("./validator");
const Console = require("./console");
const input = new Console();

class Reader {
   constructor () {
     this._validator = new Validator();
   }

  async readText (promptMessage) {
    let res = "";

    do {
      res = await input.read(promptMessage);
    } while (this._validator.notValid(res) &&  this._validator.isNotCancel(res));

    console.log(res);
    return res;
  }
}

module.exports = Reader;