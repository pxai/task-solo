const CommandHandler = require("./command_handler");
const Console = require("./console");

class UpdateHandler extends CommandHandler {
  constructor (input = new Console(), tasks = []) {
    super(input, tasks);
  }

  handle () {
    console.log(this._tasks);
  }
}

module.exports = UpdateHandler;
