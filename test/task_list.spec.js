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

  it("should return todo elements", () => {
    taskList.add(new Task("Do this"));
    taskList.add(new Task("Do that"));

    expect(taskList.todos().length).to.equal(2);
  });
  
  it("should return doing elements", () => {
    let task1 = new Task("Do this");
    task1.doing();
    
    let task2 = new Task("Do that");
    task2.doing();
  
    taskList.add(task1);
    taskList.add(task2);

    expect(taskList.doings().length).to.equal(2);
  });
  
  it("should return done elements", () => {
    let task1 = new Task("Do this");
    task1.done();
    
    let task2 = new Task("Do that");
    task2.done();
  
    taskList.add(task1);
    taskList.add(task2);

    expect(taskList.dones().length).to.equal(2);
  });
 });
});
