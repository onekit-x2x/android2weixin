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
        this.setData({['width_']: this._getWidth(newValue)})
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({['height_']: this._getHeight(newValue)})
      }
    },
    layout_margin: {
      type: String,
      value: 'inherit',
      observer(newValue) {
        this.setData({['layout_margin_']: this._getDimension(newValue)})
      }
    },
    layout_marginLeft: {
      type: String,
      value: 'auto',
      observer(newValue) {
        this.setData({['layout_marginLeft_']: this._getDimension(newValue)})
      }
    },
    layout_marginRight: {
      type: String,
      value: 'auto',
      observer(newValue) {
        this.setData({['layout_marginRight_']: this._getDimension(newValue)})
      }
    },
    layout_marginTop: {
      type: String,
      value: 'auto',
      observer(newValue) {
        this.setData({['layout_marginTop_']: this._getDimension(newValue)})
      }
    },
    layout_marginBottom: {
      type: String,
      value: 'auto',
      observer(newValue) {
        this.setData({['layout_marginBottom_']: this._getDimension(newValue)})
      }
    },
    visibility: {
      type: String,
      value: 'visible',
      observer(newValue) {
        this.setData({['visibility_']: this._getVisibility(newValue)})
      }
    },
    gravity: {
      type: String,
      observer(newValue) {
        this.setData({['gravity_']: this._getGravity(newValue)})
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer(newValue) {
        const background_ = this._getBackground(newValue)
        this.setData({['background_']: background_})
      }
    },
    text: {
      type: String, value: ''
    },
    textColor: {
      type: String, value: ''
    },
    textSize: {
      type: String,
      value: '14sp',
      observer(newValue) {
        const textSize_ = this._getDimension(newValue)
        this.setData({['textSize_']: textSize_})
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        ['visibility_']: this._getVisibility(this.properties.visibility),
        ['gravity_']: this._getGravity(this.properties.gravity),
        ['width_']: this._getWidth(this.properties.layout_width),
        ['height_']: this._getHeight(this.properties.layout_height),
        ['textSize_']: this._getDimension(this.properties.textSize),
        ['layout_margin_']: this._getDimension(this.properties.layout_margin),
        ['layout_marginTop_']: this._getDimension(this.properties.layout_marginTop),
        ['layout_marginBottom_']: this._getDimension(this.properties.layout_marginBottom),
        ['layout_marginLeft_']: this._getDimension(this.properties.layout_marginLeft),
        ['layout_marginRight_']: this._getDimension(this.properties.layout_marginRight),
        ['background_']: this._getBackground(this.properties.background)
      })
    },
  },
  methods: {
    _getDimension(dimension) {
      if (['inherit', 'auto'].includes(dimension)) {
        return dimension
      }
      if (dimension.endsWith('dp')) {
        return dimension.replace('dp', 'rpx')
      } else if (dimension.endsWith('dip')) {
        return dimension.replace('dip', 'rpx')
      } else if (dimension.endsWith('sp')) {
        return dimension.replace('sp', 'px')
      } else if (dimension.endsWith('px')) {
        return dimension
      } else {
        throw new Error(dimension)
      }
    },
    _getWidth(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return ''
        case 'wrap_content':
          return 'width:auto'
        default:
          return `width:${this._getDimension(size)}`
      }
    },
    _getHeight(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return 'height:100%'
        case 'wrap_content':
          return 'height:auto'
        default:
          return `height:${this._getDimension(size)}`
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
