/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
// import {PATH} from 'oneutil'
// import OneKit from '../../js/OneKit'
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
    console.log(intent._newActivityClass)
    // const url = PATH.rel2abs(OneKit.currentUrl, intent._newActivityClass.replace('$$', '/'))
  }
}
