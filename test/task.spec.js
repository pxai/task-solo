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
  });

  it("should have initial data", () => {
    const task = new Task("Important task");

    expect(task.id).to.match(/[0-9]+/);
    expect(task.todo).to.equal("Important task");
    expect(task.status).to.equal(0);
  });
});
