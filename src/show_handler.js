class ShowHandler {
  constructor (tasks = []) {
    this._tasks = tasks;
  }

  handle () {
    console.log(this._tasks);
  }
}

module.exports = ShowHandler;
