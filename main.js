const UI = require("./src/ui");
const Console = require("./src/console");

const input = new Console();
// const ui = new UI();

// const answer = await input.read("say something");
// input.read("jejeje").then( res => { console.log(res); });

async function main () {
  let res = await input.read("jejeje");
  console.log(res);
}

main();
// console.log("you wrote: ", answer);

// ui.start();

