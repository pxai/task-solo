class Task {
  constructor (todo) {
    this._todo = todo;
    this._id = Math.round(Math.random());
  }

  get id () {
    return this._id;
  }

  get todo () {
    return this._todo;
  }
}

module.exports = Task;
