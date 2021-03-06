const Menu = require("./menu");
const ShowHandler = require("./show_handler");

class UI {
    constructor (menu) {
        this._menu = menu || new Menu();
        this._handlers = [new ShowHandler(), this.add];
    }

    start () {
        console.log(this._menu.show());
    }

   process (command) {
        if (command !== "4") {
           console.log("executing: ", command, this._handlers[+command]);
            this._handlers[+command].handle();
        } else {
            console.log(this._menu.menu());
        }
    }
}

module.exports = UI;
