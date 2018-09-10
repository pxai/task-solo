const chai = require('chai');
const expect = chai.expect;
const TaskList = require("../src/task_list");
const Task = require("../src/task");

describe("Task List", () => {
  it("should exist", () => {
    expect(TaskList).to.exist; 
  });   

  it("should have a constructor with defaults", () => {
    const taskList = new TaskList();

    expect(taskList.length).to.equal(0);
    expect(taskList.name).to.equal("");
  });

  it("should be able to set a name", () => {
    const taskList = new TaskList("MyList");

    expect(taskList.name).to.equal("MyList");
  });

 context("List Task item management", () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskList();
  });

  it("should add elements correctly", () => {
    expect(taskList.length).to.equal(0);

    taskList.add(new Task("Do something"));

    expect(taskList.length).to.equal(1);
  });

 });
});
