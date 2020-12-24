/* eslint-disable no-useless-computed-key */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import android_behavior from '../../behavior/android_behavior'

Component({
  behaviors: [onekit_behavior, android_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    orientation: {
      type: String,
      value: 'horizontal',
      observer(newValue) {
        this.setData({['orientationStyle']: this._getOrientation(newValue)})
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        ['orientationStyle']: this._getOrientation(this.properties.orientation)
      })
    },
  },
  methods: {
    _getOrientation(orientation) {
      const direction = orientation === 'horizontal' ? 'row' : 'column'
      return `flex-direction:${direction}`
    }
  }
})
