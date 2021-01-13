/* eslint-disable no-case-declarations */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = Behavior({
  data: {
  },
  properties: {
    layout_alignParentBottom: {
      type: Boolean,
      value: false,
      observer(newValue) {
        this.setData({
          ['alignParentBottom_']: this._getAlignParentBottom(newValue)
        })
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        ['alignParentBottom_']: this._getAlignParentBottom(this.properties.layout_alignParentBottom),
      })
    },
  },
  methods: {
    _getAlignParentBottom(isAlign) {
      return isAlign ? 'bottom:0px;' : ''
    }
  }
})
