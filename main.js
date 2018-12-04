const UI = require("./src/ui");
const Console = require("./src/console");

const input = new Console();
// const ui = new UI();


function notValid (result) {
    return result.trim() === "";
}

function isNotCancel (result) {
    return result !== ".";
}

async function add () {
  let res = "";

  do {
    res = await input.read("Add something: ");
  } while (notValid(res) &&  isNotCancel(res));

  console.log(res);
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

