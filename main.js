const UI = require("./src/ui");
const Console = require("./src/console");
const Validator = require("./src/validator");
const input = new Console();
const ui = new UI();


function notValid (result) {
    return result.trim() === "";
}

function isNotCancel (result) {
    return result !== ".";
}

function notValidId(number, validNumbers) {
    return !validNumbers.includes(+number);
}

async function add () {
  let res = "";

  do {
    res = await input.read("Add something: ");
  } while (notValid(res) &&  isNotCancel(res));

  console.log(res);
  return res;
}

async function readId (validNumbers) {
    let number = -1;

    do {
      number = await input.read("Please insert a number: ");
    } while (notValidId(number, validNumbers) && isNotCancel(number));

    return number;
}

async function update (validNumbers) {
    let number = await readId(validNumbers);

    console.log(number);
    let task = await add();
    console.log(task);
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

async function main () {
    await add();
    await readId([1,2,3,4]);
    input.close();
}

// main();
// console.log("you wrote: ", answer);

 ui.start();

