const Menu = require("./menu");

class UI {
    constructor (menu) {
        this._menu = menu || new Menu();
    }

    start () {
        this.process(this._menu.menu());
    }

    process (command) {
        if (command !== "4") {
            this._menu.tryToExec(command);
        } else {
            this._menu.menu();
        }
    }
}

module.exports = UI;
