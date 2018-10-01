class TaskList {
  constructor (name = "") {
    this._name = name;
    this._tasks = []; 
  }

  get length () {
    return this._tasks.length;
  }

  get name () {
    return this._name;  
  }

  taskAt (index) {
    return this._tasks[index];
  }
  
  add (task) {
    this._tasks.push(task);
  }

  remove (taskId) {
    let tasks = this._tasks.filter(task => task.id !== taskId);
    this._tasks = tasks;
  }

  todos () {
    return this._tasks.filter(task => task.status === 0);
  }

  doings () {
    return this._tasks.filter(task => task.status === 1);
  }
  
  dones () {
    return this._tasks.filter(task => task.status === 2);
  }
}

module.exports = TaskList;
