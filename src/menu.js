const Console = require("./console");

class Menu {
    constructor (content = "show a menu with content" , commands = {}) {
        this.input = new Console();
        this.content = content;
        this.commands = commands || {
            "1": this.add,
            "2": this.change,
            "3": this.remove
        };
    }

    show () {
        return this.content + "\nChoose: 1.Add | 2.Change | 3.Delete | 4.Quit";
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

    bye () {
        return "Thanks for using Task-Solo!";
    }

    menu () {
        return new Promise((resolve) => {
            this.input.read(this.show()).then( data => {
                if (data == "4") {
                    resolve(0);
                    //                process.exit();
                } else {
                    this.tryToExec(data);
                    this.menu();
                }
            });
        });
    }

    tryToExec (command) {
        if (this.commands[command]) {
            this.commands[command]();
        }

        return "Command not found";
    }

    clear () {
        process.stdout.write("\x1B[2J\x1B[0f");
    }
}

module.exports = Menu;
