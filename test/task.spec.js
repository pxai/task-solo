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

    expect(task.id).to.match(/[a-zA-Z0-9]{32}/);
    expect(task.description).to.equal("Important task");
    expect(task.status).to.equal(0);
  });

  context("change task status", () => {
    let task;

    beforeEach(() => {
      task = new Task("Important task");
    });

    it("should change status when todo", () => {
      task.todo();

      expect(task.status).to.equal(0);
      expect(task.changedAt).to.not.equal(null);
    });

    it("should change when doing", () => {
     task.doing();

      expect(task.status).to.equal(1);
      expect(task.changedAt).to.not.equal(null);
    });

    it("should change status when done", () => {
      task.done();

      expect(task.status).to.equal(2);
      expect(task.changedAt).to.not.equal(null);
    });
  });
});
