/* eslint-disable no-case-declarations */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = Behavior({

  properties: {
    layout_width: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({['widthStyle']: this._getSize(newValue)})
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({['heightStyle']: this._getSize(newValue)})
      }
    },
    visibility: {
      type: String,
      value: 'visible',
      observer(newValue) {
        this.setData({['visibilityStyle']: this._getVisibility(newValue)})
      }
    },
    gravity: {
      type: String,
      observer(newValue) {
        this.setData({['gravityStyle']: this._getGravity(newValue)})
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer(newValue) {
        const backgroundStyle = this._getBackground(newValue)
        this.setData({['backgroundStyle']: backgroundStyle})
      }
    },
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
        ['visibilityStyle']: this._getVisibility(this.properties.visibility),
        ['gravityStyle']: this._getGravity(this.properties.gravity),
        ['widthStyle']: this._getSize(this.properties.layout_width),
        ['heightStyle']: this._getSize(this.properties.layout_height),
        ['backgroundStyle']: this._getBackground(this.properties.background)
      })
    },
  },
  methods: {
    _getSize(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return '100%'
        case 'wrap_content':
          return 'auto'
        default:
          if (size.endsWith('dp')) {
            return size.replace('dp', 'px')
          } else if (size.endsWith('dip')) {
            return size.replace('dip', 'px')
          } else if (size.endsWith('px')) {
            return size
          } else {
            throw new Error(size)
          }
      }
    },
    _getVisibility(visibility) {
      switch (visibility) {
        case 'gone':
          return 'display:none !important;'
        case 'visible':
          return ''
        case 'invisible':
          return 'visibility:hidden;'
        default:
          throw new Error(visibility)
      }
    },
    _getGravity(gravity) {
      if (!gravity) {
        return ''
      }
      let result = ''
      const gravitys = gravity.split('|')
      for (const gvt of gravitys) {
        switch (gvt) {
          case 'center':
            result += 'text-align:center;vertical-align:middule;'
            break
          case 'center_horizontal':
            result += 'text-align:center;'
            break
          default:
            throw new Error(gvt)
        }
      }
      return result
    },
    _getBackground(background) {
      if (background.startsWith('data:')) {
        return `url(${background}) background-size:100% 100%`
      } else {
        return background
      }
    },
    ui_tap() {
      this.triggerEvent('Tap',)
    },
    ui_touchstart() {
      this.triggerEvent('Touchstart')
    },
    ui_touchmove() {
      this.triggerEvent('Touchmove')
    },
    ui_touchcancel() {
      this.triggerEvent('Touchcancel')
    },
    ui_touchend() {
      this.triggerEvent('Touchend')
    },
    ui_longpress() {
      this.triggerEvent('Longpress')
    },
    ui_longtap() {
      this.triggerEvent('Longtap')
    },
  },
})
