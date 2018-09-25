const Console = require("./src/console");
const input = new Console();

const answer = "";

while (true) {
  input.read("And something else:").then( data => {
    console.log("You added: ", data);
  });
}

console.log("Ansser:", answer);
