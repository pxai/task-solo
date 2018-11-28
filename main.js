const UI = require("./src/ui");
const Console = require("./src/console");

const input = new Console();
// const ui = new UI();

const answer = await input.read("say something");
console.log("you wrote: ", answer);

// ui.start();

