class ShowHandler {
  constructor (tasks = []) {
    this._tasks = tasks;
  }

  handle () {
    return this._tasks;
  }
}

module.exports = ShowHandler;
