const Console = require("./src/console");
const Menu = require("./src/menu");

const input = new Console();
const menu = new Menu();

const answer = "";

  input.read(menu.show()).then( data => {
    console.log("You added: ", data);
  });

console.log("Ansser:", answer);
