const Menu = require("./menu");

class UI {
    constructor (menu) {
      this._menu = menu || new Menu();
    }

    start () {
      return this._menu.menu();
    }
}

module.exports = UI;
