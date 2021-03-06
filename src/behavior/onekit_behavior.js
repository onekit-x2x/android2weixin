/* eslint-disable no-console */
module.exports = Behavior({

  properties: {
    onekitPath: {
      type: String
    },
    onekitId: {
      type: String, value: ''
    }
  },
  lifetimes: {
    attached() {
      if (!getApp().onekit_ui) {
        getApp().onekit_ui = {}
      }
      if (this.data.onekitId) {
        getApp().onekit_ui[this.data.onekitId] = this
      }
    },
    detached() {
      if (this.data.onekitId) {
        getApp().onekit_ui[this.data.onekitId] = null
      }
    }
  }

})
