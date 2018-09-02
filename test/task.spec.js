const chai = require("chai");
const expect = chai.expect;
const Task = require("../src/task");

describe("Task Object", () => {
  it("exists a task object",() => {
    expect(Task).to.exist;  
  });
});
