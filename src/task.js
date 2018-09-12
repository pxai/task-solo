const UUID = require("./uuid");

class Task {
  constructor (todo) {
    this._todo = todo;
    this._id = UUID.generate(); 
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

  done () {
    this._status = 1;
    this._changedAt = new Date();
  }

  undone () {
    this._status = 0;
    this._changedAt = new Date();
  }
}

module.exports = Task;
