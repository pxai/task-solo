const CommandHandler = require("./command_handler");

class ShowHandler extends CommandHandler {
  constructor (tasks = []) {
    this._tasks = tasks;
  }

  handle () {
    console.log(this._tasks);
  }
}

module.exports = ShowHandler;
