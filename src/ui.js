const Menu = require("./menu");

class UI {
    constructor () {
      this._menu = new Menu();
    }

    start () {
      this._menu.menu();
    }
}

module.exports = UI;
