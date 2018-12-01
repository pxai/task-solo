const fs = require('fs');

class Datasource {
  constructor (file = "") {
    this._file = file;
    this._data = [];

    this.load();
  }

  get data () {
    return this._data;
  }

  load () {
    try {
        this._data = JSON.parse(fs.readFileSync(this._file));
     } catch (e) {
        this._data;
        console.log('ERROR' + e);
     }
     return this._data;
  }

  save () {
    try {
        appendfs.writeFileSync(this._file, JSON.stringify(this._data));
    } catch (error) {
        console.log("ERROR saving data: ", error);
    }
  }
}

module.exports = Datasource;
