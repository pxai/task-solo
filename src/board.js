class Board {
  constructor (taskList) {
    this._taskList = taskList;
  }  

  show () {
    return this._taskList.toString();
  }
}

module.exports = Board;
