const Console = require("./console");

class Menu {
    constructor (content = "" , commands = null) {
        this.input = new Console();
        this.content = content;
    }

    show () {
        return this.content + "\nChoose: 0.Show | 1.Add | 2.Change | 3.Delete | 4.Quit\n";
    }

    bye () {
        return "Thanks for using Task-Solo!";
    }

    clear () {
        process.stdout.write("\x1B[2J\x1B[0f");
    }
}

module.exports = Menu;
