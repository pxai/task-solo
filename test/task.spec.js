const chai = require("chai");
const expect = chai.expect;
const Task = require("../src/task");

describe("Task Object", () => {
  it("exists a task object",() => {
    expect(Task).to.exist;  
  });

  it("should have a constructor", () => {
    const task = new Task("Take over the world");

    expect(task).to.be.an.instanceof(Task);
    expect(task.id).to.match(/[0-9]+/);
  });
});
