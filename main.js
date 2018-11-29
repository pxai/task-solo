const UI = require("./src/ui");
const Console = require("./src/console");

const input = new Console();
// const ui = new UI();

// const answer = await input.read("say something");
// input.read("jejeje").then( res => { console.log(res); });

function notValid (result) {
    return result === "";
}

async function add () {
  let res = "";
  do {
    res = await input.read("Add something");
  } while (notValid(res));

  return res;
}

add();
// console.log("you wrote: ", answer);

// ui.start();

