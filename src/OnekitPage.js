/* eslint-disable no-console */
/* eslint-disable camelcase */
import Bundle from './java/android/os/Bundle'

export default function (adr_activity) {
  const wx_object = {
    onLoad() {
      adr_activity.PAGE = this
      if (adr_activity.onCreate) {
        adr_activity.onCreate(new Bundle())
      }
    },
    onReady() {
      if (adr_activity.onReady) {
        adr_activity.onReady()
      }
    },
    onShow() {
      if (adr_activity.onResume) {
        adr_activity.onResume()
      }
    },
    onHide() {
      if (adr_activity.onHide) {
        adr_activity.onHide()
      }
    }
  }
  Page(wx_object)
}
