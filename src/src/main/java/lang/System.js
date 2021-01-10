/* eslint-disable no-console */
export default class System {
  static currentTimeMillis() {
    const now = new Date()
    return now.getTime() // * 1000 + now.getMilliseconds();
  }
}
