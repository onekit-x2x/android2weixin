/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import android_behavior from '../../behavior/android_behavior'

Component({
  behaviors: [onekit_behavior, android_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    text: {
      type: String, value: ''
    },
    textColor: {
      type: String, value: ''
    },
    textSize: {
      type: String, value: ''
    },
    fontSize: {
      type: String,
      value: '20dp',
      observer(newValue) {
        const fontSizeStyle = this._getSize(newValue)
        this.setData({fontSizeStyle})
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        fontSizeStyle: this._getSize(this.properties.fontSize)
      })
    },
  },
  computed: {
  },
  methods: {
  }
})
