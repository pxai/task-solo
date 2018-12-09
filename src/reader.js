const Validator = require("./validator");
const Console = require("./console");
const input = new Console();

class Reader {
   constructor (input = new Console()) {
     this._input = input;
     this._validator = new Validator();
   }

  async readText (promptMessage) {
    let res = "";

    do {
      res = await this._input.read(promptMessage);
    } while (this._validator.notValid(res) &&  this._validator.isNotCancel(res));

    return res;
  }

  async readId (promptMessage, validNumbers) {
      let number = -1;

      do {
        number = await this._input.read(promptMessage);
      } while (this._validator.isNotValidId(number, validNumbers) && this._validator.isNotCancel(number));

      return number;
  }
}

module.exports = Reader;
