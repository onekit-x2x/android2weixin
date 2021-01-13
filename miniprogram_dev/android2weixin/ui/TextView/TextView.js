module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _relativelayout_behavior = __webpack_require__(2);

var _relativelayout_behavior2 = _interopRequireDefault(_relativelayout_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-case-declarations */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = Behavior({
  behaviors: [_onekit_behavior2.default, _relativelayout_behavior2.default],
  data: {},
  properties: {
    layout_width: {
      type: String,
      value: 'match_parent',
      observer: function observer(newValue) {
        var _setData;

        this.setData((_setData = {}, _setData['width_'] = this._getWidth(newValue), _setData));
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer: function observer(newValue) {
        var _setData2;

        this.setData((_setData2 = {}, _setData2['height_'] = this._getHeight(newValue), _setData2));
      }
    },
    layout_margin: {
      type: String,
      value: 'inherit',
      observer: function observer(newValue) {
        var _setData3;

        this.setData((_setData3 = {}, _setData3['layout_margin_'] = this._getDimension(newValue), _setData3));
      }
    },
    layout_marginLeft: {
      type: String,
      value: 'auto',
      observer: function observer(newValue) {
        var _setData4;

        this.setData((_setData4 = {}, _setData4['layout_marginLeft_'] = this._getDimension(newValue), _setData4));
      }
    },
    layout_marginRight: {
      type: String,
      value: 'auto',
      observer: function observer(newValue) {
        var _setData5;

        this.setData((_setData5 = {}, _setData5['layout_marginRight_'] = this._getDimension(newValue), _setData5));
      }
    },
    layout_marginTop: {
      type: String,
      value: 'auto',
      observer: function observer(newValue) {
        var _setData6;

        this.setData((_setData6 = {}, _setData6['layout_marginTop_'] = this._getDimension(newValue), _setData6));
      }
    },
    layout_marginBottom: {
      type: String,
      value: 'auto',
      observer: function observer(newValue) {
        var _setData7;

        this.setData((_setData7 = {}, _setData7['layout_marginBottom_'] = this._getDimension(newValue), _setData7));
      }
    },
    visibility: {
      type: String,
      value: 'visible',
      observer: function observer(newValue) {
        var _setData8;

        this.setData((_setData8 = {}, _setData8['visibility_'] = this._getVisibility(newValue), _setData8));
      }
    },
    gravity: {
      type: String,
      observer: function observer(newValue) {
        var _setData9;

        this.setData((_setData9 = {}, _setData9['gravity_'] = this._getGravity(newValue), _setData9));
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer: function observer(newValue) {
        var _setData10;

        var background_ = this._getBackground(newValue);
        this.setData((_setData10 = {}, _setData10['background_'] = background_, _setData10));
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
      observer: function observer(newValue) {
        var _setData11;

        var textSize_ = this._getDimension(newValue);
        this.setData((_setData11 = {}, _setData11['textSize_'] = textSize_, _setData11));
      }
    }
  },
  lifetimes: {
    attached: function attached() {
      var _setData12;

      this.setData((_setData12 = {}, _setData12['visibility_'] = this._getVisibility(this.properties.visibility), _setData12['gravity_'] = this._getGravity(this.properties.gravity), _setData12['width_'] = this._getWidth(this.properties.layout_width), _setData12['height_'] = this._getHeight(this.properties.layout_height), _setData12['textSize_'] = this._getDimension(this.properties.textSize), _setData12['layout_margin_'] = this._getDimension(this.properties.layout_margin), _setData12['layout_marginTop_'] = this._getDimension(this.properties.layout_marginTop), _setData12['layout_marginBottom_'] = this._getDimension(this.properties.layout_marginBottom), _setData12['layout_marginLeft_'] = this._getDimension(this.properties.layout_marginLeft), _setData12['layout_marginRight_'] = this._getDimension(this.properties.layout_marginRight), _setData12['background_'] = this._getBackground(this.properties.background), _setData12));
    }
  },
  methods: {
    _getDimension: function _getDimension(dimension) {
      if (['inherit', 'auto'].includes(dimension)) {
        return dimension;
      }
      if (dimension.endsWith('dp')) {
        return dimension.replace('dp', 'rpx');
      } else if (dimension.endsWith('dip')) {
        return dimension.replace('dip', 'rpx');
      } else if (dimension.endsWith('sp')) {
        return dimension.replace('sp', 'px');
      } else if (dimension.endsWith('px')) {
        return dimension;
      } else {
        throw new Error('[dimension]', dimension);
      }
    },
    _getWidth: function _getWidth(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return '';
        case 'wrap_content':
          return 'width:auto';
        default:
          return 'width:' + this._getDimension(size);
      }
    },
    _getHeight: function _getHeight(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return 'height:100%';
        case 'wrap_content':
          return 'height:auto';
        default:
          return 'height:' + this._getDimension(size);
      }
    },
    _getVisibility: function _getVisibility(visibility) {
      switch (visibility) {
        case 'gone':
          return 'display:none !important;';
        case 'visible':
          return '';
        case 'invisible':
          return 'visibility:hidden;';
        default:
          throw new Error(visibility);
      }
    },
    _getGravity: function _getGravity(gravity) {
      if (!gravity) {
        return '';
      }
      var result = '';
      var gravitys = gravity.split('|');
      for (var _iterator = gravitys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var gvt = _ref;

        switch (gvt) {
          case 'center':
            result += 'text-align:center;vertical-align:middule;';
            break;
          case 'center_horizontal':
            result += 'text-align:center;';
            break;
          default:
            throw new Error(gvt);
        }
      }
      return result;
    },
    _getBackground: function _getBackground(background) {
      if (background.startsWith('data:')) {
        return 'url(' + background + ') background-size:100% 100%';
      } else {
        return background;
      }
    },
    _getAlignParentBottom: function _getAlignParentBottom(isAlign) {
      return isAlign ? 'bottom:0px;' : '';
    },
    ui_tap: function ui_tap() {
      if (this.clickListener) {
        this.clickListener.onClick(this);
      }
      this.triggerEvent('Click', this);
    },
    ui_touchstart: function ui_touchstart() {
      this.triggerEvent('Touchstart');
    },
    ui_touchmove: function ui_touchmove() {
      this.triggerEvent('Touchmove');
    },
    ui_touchcancel: function ui_touchcancel() {
      this.triggerEvent('Touchcancel');
    },
    ui_touchend: function ui_touchend() {
      this.triggerEvent('Touchend');
    },
    ui_longpress: function ui_longpress() {
      this.triggerEvent('Longpress');
    },
    ui_longtap: function ui_longtap() {
      this.triggerEvent('Longtap');
    },
    setOnClickListener: function setOnClickListener(clickListener) {
      this.clickListener = clickListener;
    },
    setVisibility: function setVisibility() {}
  }
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    attached: function attached() {
      if (!getApp().onekit_ui) {
        getApp().onekit_ui = {};
      }
      if (this.data.onekitId) {
        getApp().onekit_ui[this.data.onekitId] = this;
      }
    },
    detached: function detached() {
      if (this.data.onekitId) {
        getApp().onekit_ui[this.data.onekitId] = null;
      }
    }
  }

});

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _android_behavior = __webpack_require__(0);

var _android_behavior2 = _interopRequireDefault(_android_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  behaviors: [_android_behavior2.default],
  options: {
    virtualHost: true
  },
  properties: {},
  lifetimes: {
    attached: function attached() {}
  },
  computed: {},
  methods: {
    getText: function getText() {
      return this.data.text;
    },
    setText: function setText(text) {
      var _setData;

      this.setData((_setData = {}, _setData['text'] = text, _setData));
    }
  }
}); /* eslint-disable no-useless-computed-key */
/* eslint-disable camelcase */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-case-declarations */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = Behavior({
  data: {},
  properties: {
    layout_alignParentBottom: {
      type: Boolean,
      value: false,
      observer: function observer(newValue) {
        var _setData;

        this.setData((_setData = {}, _setData['alignParentBottom_'] = this._getAlignParentBottom(newValue), _setData));
      }
    }
  },
  lifetimes: {
    attached: function attached() {
      var _setData2;

      this.setData((_setData2 = {}, _setData2['alignParentBottom_'] = this._getAlignParentBottom(this.properties.layout_alignParentBottom), _setData2));
    }
  },
  methods: {
    _getAlignParentBottom: function _getAlignParentBottom(isAlign) {
      return isAlign ? 'bottom:0px;' : '';
    }
  }
});

/***/ })

/******/ });