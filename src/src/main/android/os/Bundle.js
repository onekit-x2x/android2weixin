export default class Bundle {
  constructor() {
    this._data = {}
  }

  putExtra(key, value) {
    this._data[key] = value
  }
}
