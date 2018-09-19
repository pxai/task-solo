const Console = require("./src/console");
const input = new Console();

// const answer = await input.read("Tell me something"); 
const answer = "";

input.read("And something else:").then( data => {
  console.log("You added: ", data);
  console.log("And answer again: ", answer);
});

console.log("Ansser:", answer);
