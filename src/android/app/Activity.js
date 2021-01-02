/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {PATH} from 'oneutil'
import OneKit from '../../js/OneKit'

export default class Activity {
  onCreate() {

  }

  setContentView() {

  }

  findViewById(id) {
    return getApp().onekit_ui[id]
  }

  startActivity(intent) {
    const url = PATH.rel2abs(OneKit.currentUrl, intent.newActivityClass.replace('$$', '/'))
    console.log(url)
  }

  static get class() {
    return this.name
  }
}
