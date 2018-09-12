const Console = require("src/console");
const console = new Console();

const answer = await console.read("Tell me something"); 

console.log("Ansser:", answer);
