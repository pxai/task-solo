const UUID = require("./uuid");

class Task {
  constructor (description) {
    this._description = description;
    this._id = UUID.generate(); 
    this._status = 0;
    this._createdAt = new Date();
    this._changedAt = null;
  }

  get id () {
    return this._id;
  }

  get description () {
    return this._description;
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

  todo () {
    this._status = 0; 
    this._changedAt = new Date();
  }
  
  doing () {
    this._status = 1;
    this._changedAt = new Date();
  }
  
  done () {
    this._status = 2;
    this._changedAt = new Date();
  }
}

module.exports = Task;
