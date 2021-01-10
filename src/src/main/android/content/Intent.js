/* eslint-disable no-console */
export default class Intent {
  constructor(currentActivity, newActivityClass) {
    this._currentActivity = currentActivity
    this._newActivityClass = newActivityClass
  }
}
