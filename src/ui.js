const Menu = require("./menu");

class UI {
    constructor (menu) {
        this._menu = menu || new Menu();
    }

    async start () {
        this.process(await this._menu.menu());
    }

    process (command) {
        if (command !== "4") {
//            this._menu.tryToExec(command);
        } else {
            this._menu.menu();
        }
    }
}

module.exports = UI;
