/* eslint-disable no-console */

import Bundle from '../os/Bundle'

export default class Intent {
  constructor(currentActivity, newActivityClass) {
    this._currentActivity = currentActivity
    this._newActivityClass = newActivityClass
    this._bundle = new Bundle()
  }

  putExtra(key, value) {
    this._bundle.putExtra(key, value)
  }
}
