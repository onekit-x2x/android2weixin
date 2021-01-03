/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {STRING} from 'oneutil'
import Any from '../../java/lang/Any'

export default class Activity extends Any {
  onCreate() {

  }

  setContentView() {

  }

  findViewById(id) {
    return getApp().onekit_ui[id]
  }

  startActivity(intent) {
    const url = '/' + STRING.replace(intent._newActivityClass, '.', '/')
    console.log(url)
    wx.navigateTo({
      url
    })
  }
}
