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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Behavior({

  properties: {
    onekitPath: {
      type: String
    },
    onekitId: {
      type: String, value: ''
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
      observer: function observer(newValue) {
        var _setData;

        this.setData((_setData = {}, _setData['widthStyle'] = this._getSize(newValue), _setData));
      }
    },
    layout_height: {
      type: String,
      value: 'match_parent',
      observer: function observer(newValue) {
        var _setData2;

        this.setData((_setData2 = {}, _setData2['heightStyle'] = this._getSize(newValue), _setData2));
      }
    },
    visibility: {
      type: String,
      value: 'visible',
      observer: function observer(newValue) {
        var _setData3;

        this.setData((_setData3 = {}, _setData3['visibilityStyle'] = this._getVisibility(newValue), _setData3));
      }
    },
    gravity: {
      type: String,
      observer: function observer(newValue) {
        var _setData4;

        this.setData((_setData4 = {}, _setData4['gravityStyle'] = this._getGravity(newValue), _setData4));
      }
    },
    background: {
      type: String,
      value: 'transparent',
      observer: function observer(newValue) {
        var _setData5;

        var backgroundStyle = this._getBackground(newValue);
        this.setData((_setData5 = {}, _setData5['backgroundStyle'] = backgroundStyle, _setData5));
      }
    }
  },
  lifetimes: {
    attached: function attached() {
      var _setData6;

      this.setData((_setData6 = {}, _setData6['visibilityStyle'] = this._getVisibility(this.properties.visibility), _setData6['gravityStyle'] = this._getGravity(this.properties.gravity), _setData6['widthStyle'] = this._getSize(this.properties.layout_width), _setData6['heightStyle'] = this._getSize(this.properties.layout_height), _setData6['backgroundStyle'] = this._getBackground(this.properties.background), _setData6));
    }
  },
  methods: {
    _getSize: function _getSize(size) {
      switch (size) {
        case 'match_parent':
        case 'fill_parent':
          return '100%';
        case 'wrap_content':
          return 'auto';
        default:
          if (size.endsWith('dp')) {
            return size.replace('dp', 'px');
          } else if (size.endsWith('px')) {
            return size;
          } else {
            throw new Error(size);
          }
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
    ui_tap: function ui_tap() {
      this.triggerEvent('Tap');
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
    }
  }
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(0);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _android_behavior = __webpack_require__(1);

var _android_behavior2 = _interopRequireDefault(_android_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
Component({
  behaviors: [_onekit_behavior2.default, _android_behavior2.default],
  options: {
    virtualHost: true
  },
  properties: {},
  methods: {}
});

/***/ })
/******/ ]);