class TaskList {
  constructor () {
    this._tasks = []; 
  }

  get length () {
    return this._tasks.length;
  }
}

module.exports = TaskList;
