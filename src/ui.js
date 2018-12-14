const Menu = require("./menu");
const ShowHandler = require("./show_handler");

class UI {
    constructor (menu) {
        this._menu = menu || new Menu();
        this._handlers = [null, new ShowHandler()];
    }

    async start () {
        this.process(await this._menu.menu());
    }

    process (command) {
        if (command !== "4") {
            console.log("executing: ", command);
//            this._handlers[+command].handle();
        } else {
            this._menu.menu();
        }
    }
}

module.exports = UI;
