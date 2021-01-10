/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {STRING} from 'oneutil'
import Any from '../../java/lang/Any'

export default class Activity extends Any {
  onCreate() {

  }

  setContentView() { // layout) {
    // const onekit_ui = `/layout/${layout}.wxml`
    // this.PAGE.setData({onekit_ui})
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
