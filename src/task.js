class Task {
  constructor (todo) {
    this._todo = todo;
    this._id = Math.round(Math.random());
    this._status = 0;
    this._createdAt = new Date();
    this._changedAt = null;
  }

  get id () {
    return this._id;
  }

  get todo () {
    return this._todo;
  }

  get status () {
    return this._status;
  }

  get createdAt () {
    return this._createdAt;
  }

  get changedAt () {
    return this._changedAt;  
  }
}

module.exports = Task;
