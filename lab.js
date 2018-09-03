const Console = require("./src/console");
const console = new Console();

const answer = console.read("Tell me something"); 

console.read("And something else:").then( data => {
  console.log("You added: ", data);
  console.log("And answer again: ", answer);
});

console.log("Ansser:", answer);
