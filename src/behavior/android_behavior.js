/* eslint-disable no-case-declarations */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-console */
/* eslint-disable camelcase */

import onekit_behavior from './onekit_behavior'
import relativelayout_behavior from './relativelayout_behavior'

module.exports = Behavior({
  behaviors: [onekit_behavior, relativelayout_behavior],
  data: {},
  properties: {
    layout_width: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({
          ['width_']: this._getWidth(newValue)
        })
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({
          ['height_']: this._getHeight(newValue)
        })
      }
    },
    layout_margin: {
      type: String,
      value: '',
      observer(newValue) {
        this.setData({
          ['layout_margin_']: this._getMargin(newValue)
        })
      }
    },
    layout_marginLeft: {
      type: String,
      value: '0px',
      observer(newValue) {
        this.setData({
          ['layout_marginLeft_']: this._getMarginLeft(newValue)
        })
      }
    },
    layout_marginRight: {
      type: String,
      value: '0px',
      observer(newValue) {
        this.setData({
          ['layout_marginRight_']: this._getMarginRight(newValue)
        })
      }
    },
    layout_marginTop: {
      type: String,
      value: '0px',
      observer(newValue) {
        this.setData({
          ['layout_marginTop_']: this._getMarginTop(newValue)
        })
      }
    },
    layout_marginBottom: {
      type: String,
      value: '0px',
      observer(newValue) {
        this.setData({
          ['layout_marginBottom_']: this._getMargin(newValue)
        })
      }
    },
    visibility: {
      type: String,
      value: 'visible',
      observer(newValue) {
        this.setData({
          ['visibility_']: this._getVisibility(newValue)
        })
      }
    },
    gravity: {
      type: String,
      observer(newValue) {
        this.setData({
          ['gravity_']: this._getGravity(newValue)
        })
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer(newValue) {
        const background_ = this._getBackground(newValue)
        this.setData({
          ['background_']: background_
        })
      }
    },
    text: {
      type: String,
      value: ''
    },
    textColor: {
      type: String,
      value: ''
    },
    textSize: {
      type: String,
      value: '14sp',
      observer(newValue) {
        const textSize_ = this._getDimension(newValue)
        this.setData({
          ['textSize_']: textSize_
        })
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
        ['layout_margin_']: this._getMargin(this.properties.layout_margin),
        ['layout_marginTop_']: this._getMarginTop(this.properties.layout_marginTop),
        ['layout_marginBottom_']: this._getMarginBottom(this.properties.layout_marginBottom),
        ['layout_marginLeft_']: this._getMarginLeft(this.properties.layout_marginLeft),
        ['layout_marginRight_']: this._getMarginRight(this.properties.layout_marginRight),
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
        throw new Error('[dimension]', dimension)
      }
    },
    _getMargin(dimension) {
      return this._getMarginTop(dimension) +
        this._getMarginBottom(dimension) +
        this._getMarginRight(dimension) +
        this._getMarginLeft(dimension)
    },
    _getMarginTop(dimension) {
      return `margin-top:${this._getDimension(dimension)};`
    },
    _getMarginRight(dimension) {
      return `margin-right:${this._getDimension(dimension)};`
    },
    _getMarginBottom(dimension) {
      return `margin-bottom:${this._getDimension(dimension)};`
    },
    _getMarginLeft(dimension) {
      return `margin-left:${this._getDimension(dimension)};`
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
    _getAlignParentBottom(isAlign) {
      return isAlign ? 'margin-bottom:0px;' : ''
    },
    ui_tap() {
      if (this.clickListener) {
        this.clickListener.onClick(this)
      }
      this.triggerEvent('Click', this)
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
    setOnClickListener(clickListener) {
      this.clickListener = clickListener
    },
    setVisibility() {}
  },
})
