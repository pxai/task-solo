const Console = require("./console");

class Menu {
    constructor () {
        this.input = new Console();
    }

    show () {
        return "Choose: 1.Add | 2.Change | 3.Delete | 4.Quit";
    }

    add () {
        return "Please enter a task: ";
    }

    change () {
        return "Task number to change: ";
    }

    remove () {
        return "Task number to remove: ";
    }

    menu () {
      return new Promise((resolve) => {
        this.input.read(this.show()).then( data => {
            if (data == "4") {
                resolve(0);
//                process.exit();
            } else {
                this.menu();
            }
        });
      });
    }

    clear () {
        process.stdout.write("\x1B[2J\x1B[0f");
    }
}

module.exports = Menu;
