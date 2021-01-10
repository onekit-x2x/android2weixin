/* eslint-disable no-useless-computed-key */
/* eslint-disable camelcase */
import android_behavior from '../../behavior/android_behavior'

Component({
  behaviors: [android_behavior],
  options: {
    virtualHost: true
  },
  properties: {
  },
  lifetimes: {
    attached() {
    },
  },
  computed: {
  },
  methods: {
    getText() {
      return this.data.text
    },
    setText(text) {
      this.setData({
        ['text']: text
      })
    }
  }
})
