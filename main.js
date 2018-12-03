const UI = require("./src/ui");
const Console = require("./src/console");

const input = new Console();
// const ui = new UI();

// const answer = await input.read("say something");
// input.read("jejeje").then( res => { console.log(res); });

function notValid (result) {
    return result.trim() === "";
}

async function add () {
  let res = "";
  do {
    res = await input.read("Add something: ");
    console.log(`res: #${res}# ${notValid(res)}`)
  } while (notValid(res));
    console.log(`out: #${res}#`)
  return res;
}

// add();

function addProm () {
  input.read("Add something: ").then( res => {
     if (notValid(res)) {
        addProm();
     }

     return res;
  });
}
add();
// console.log("you wrote: ", answer);

// ui.start();

