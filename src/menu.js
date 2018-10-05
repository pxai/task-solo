const Console = require("./console");

class Menu {
    constructor () {
        this.input = new Console();
    }

    show () {
        return "Choose: 1.Add | 2.Change | 3.Delete";
    }

    menu () {
        this.input.read(this.show()).then( data => {
            console.log("You added: ", data);
            if (data != 0) { this.menu(); }
        });
    }

    clear () {
        process.stdout.write("\x1B[2J\x1B[0f");
    }
}

module.exports = Menu;
