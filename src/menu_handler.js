const CommandHandler = require("./command_handler");
const Console = require("./console");

class MenuHandler extends CommandHandler {
  constructor (input = new Console(), menu) {
    super(input, []);
    this._menu = menu;
  }

  handle () {
    console.log(this._menu.show());
  }
}

module.exports = MenuHandler;
