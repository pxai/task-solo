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
}

module.exports = TaskList;
