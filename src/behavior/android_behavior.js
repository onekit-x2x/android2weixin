
/* eslint-disable no-unreachable */
/* eslint-disable no-useless-computed-key */
/* eslint-disable key-spacing */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PATH from '../../node_modules/oneutil/PATH'
import OneKit from '../js/OneKit'

module.exports = Behavior({

  properties: {
    layout_width: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({['widthStyle']:this._getSize(newValue)})
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer(newValue) {
        this.setData({['heightStyle']:this._getSize(newValue)})
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer(newValue) {
        const backgroundStyle = this._getBackground(newValue)
        this.setData({['backgroundStyle']:backgroundStyle})
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        ['widthStyle']:this._getSize(this.properties.layout_width),
        ['heightStyle']:this._getSize(this.properties.layout_height),
        ['backgroundStyle']:this._getBackground(this.properties.background)
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
            return size.replace('dp', 'rpx')
          } else if (size.endsWith('px')) {
            return size
          } else {
            throw new Error(size)
          }
      }
    },
    _getBackground(background) {
      if (!background.startsWith('@')) {
        return background
      }
      const type_key = background.substr(1).split('/')
      const type = type_key[0]
      const key = type_key[1]
      switch (type) {
        case 'color':
          return key
        case 'mipmap': {
          const currentUrl = OneKit.currentUrl
          const url = PATH.abs2rel(`${currentUrl}`, `/res/mipmap/${key}.png`)
          console.log(url)
          return `url(${url})` }
        case 'drawable':
          return ''
        default: throw new Error(`[${type}]${key}`)
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
