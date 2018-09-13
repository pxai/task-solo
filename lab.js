const Console = require("./src/console");
const input = new Console();

const answer = input.read("Tell me something"); 

input.read("And something else:").then( data => {
  console.log("You added: ", data);
  console.log("And answer again: ", answer);
});

console.log("Ansser:", answer);
