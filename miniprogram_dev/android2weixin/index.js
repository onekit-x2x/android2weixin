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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bundle = function Bundle() {
  _classCallCheck(this, Bundle);
};

exports.default = Bundle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Any2 = __webpack_require__(16);

var _Any3 = _interopRequireDefault(_Any2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
// import {PATH} from 'oneutil'
// import OneKit from '../../js/OneKit'


var Activity = function (_Any) {
  _inherits(Activity, _Any);

  function Activity() {
    _classCallCheck(this, Activity);

    return _possibleConstructorReturn(this, _Any.apply(this, arguments));
  }

  Activity.prototype.onCreate = function onCreate() {};

  Activity.prototype.setContentView = function setContentView() {};

  Activity.prototype.findViewById = function findViewById(id) {
    return getApp().onekit_ui[id];
  };

  Activity.prototype.startActivity = function startActivity(intent) {
    console.log(intent._newActivityClass);
    // const url = PATH.rel2abs(OneKit.currentUrl, intent._newActivityClass.replace('$$', '/'))
  };

  return Activity;
}(_Any3.default);

exports.default = Activity;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ComponentActivity = __webpack_require__(5);

var _ComponentActivity2 = _interopRequireDefault(_ComponentActivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentActivity = function (_androidx$core$app$Co) {
  _inherits(ComponentActivity, _androidx$core$app$Co);

  function ComponentActivity() {
    _classCallCheck(this, ComponentActivity);

    return _possibleConstructorReturn(this, _androidx$core$app$Co.apply(this, arguments));
  }

  return ComponentActivity;
}(_ComponentActivity2.default);

exports.default = ComponentActivity;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Activity2 = __webpack_require__(3);

var _Activity3 = _interopRequireDefault(_Activity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentActivity = function (_Activity) {
  _inherits(ComponentActivity, _Activity);

  function ComponentActivity() {
    _classCallCheck(this, ComponentActivity);

    return _possibleConstructorReturn(this, _Activity.apply(this, arguments));
  }

  return ComponentActivity;
}(_Activity3.default);

exports.default = ComponentActivity;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionBar = function () {
  function ActionBar() {
    _classCallCheck(this, ActionBar);
  }

  // eslint-disable-next-line class-methods-use-this
  ActionBar.prototype.hide = function hide() {};

  return ActionBar;
}();

exports.default = ActionBar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ComponentActivity2 = __webpack_require__(4);

var _ComponentActivity3 = _interopRequireDefault(_ComponentActivity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FragmentActivity = function (_ComponentActivity) {
  _inherits(FragmentActivity, _ComponentActivity);

  function FragmentActivity() {
    _classCallCheck(this, FragmentActivity);

    return _possibleConstructorReturn(this, _ComponentActivity.apply(this, arguments));
  }

  return FragmentActivity;
}(_ComponentActivity3.default);

exports.default = FragmentActivity;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _OnekitPage = __webpack_require__(13);

var _OnekitPage2 = _interopRequireDefault(_OnekitPage);

var _android = __webpack_require__(14);

var _android2 = _interopRequireDefault(_android);

var _androidx = __webpack_require__(23);

var _androidx2 = _interopRequireDefault(_androidx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  android: _android2.default,
  androidx: _androidx2.default,
  OnekitPage: _OnekitPage2.default
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (adr_activity) {
  var wx_object = {
    onLoad: function onLoad() {
      adr_activity.PAGE = this;
      if (adr_activity.onCreate) {
        adr_activity.onCreate(new _Bundle2.default());
      }
    },
    onReady: function onReady() {
      if (adr_activity.onReady) {
        adr_activity.onReady();
      }
    },
    onShow: function onShow() {
      if (adr_activity.onResume) {
        adr_activity.onResume();
      }
    },
    onHide: function onHide() {
      if (adr_activity.onHide) {
        adr_activity.onHide();
      }
    }
  };
  Page(wx_object);
};

var _Bundle = __webpack_require__(2);

var _Bundle2 = _interopRequireDefault(_Bundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(15);

var _app2 = _interopRequireDefault(_app);

var _content = __webpack_require__(17);

var _content2 = _interopRequireDefault(_content);

var _os = __webpack_require__(19);

var _os2 = _interopRequireDefault(_os);

var _view = __webpack_require__(21);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  app: _app2.default, content: _content2.default, os: _os2.default, view: _view2.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Activity = __webpack_require__(3);

var _Activity2 = _interopRequireDefault(_Activity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Activity: _Activity2.default
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Any = function () {
  function Any() {
    _classCallCheck(this, Any);
  }

  _createClass(Any, null, [{
    key: "class",
    get: function get() {
      return this.name;
    }
  }]);

  return Any;
}();

exports.default = Any;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Intent = __webpack_require__(18);

var _Intent2 = _interopRequireDefault(_Intent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Intent: _Intent2.default
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
var Intent = function Intent(currentActivity, newActivityClass) {
  _classCallCheck(this, Intent);

  this._currentActivity = currentActivity;
  this._newActivityClass = newActivityClass;
};

exports.default = Intent;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Bundle = __webpack_require__(2);

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Handler = __webpack_require__(20);

var _Handler2 = _interopRequireDefault(_Handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Bundle: _Bundle2.default,
  Handler: _Handler2.default
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Handler = function () {
  function Handler() {
    _classCallCheck(this, Handler);
  }

  // eslint-disable-next-line class-methods-use-this
  Handler.prototype.postDelayed = function postDelayed(runnable) {
    setTimeout(function () {
      runnable.run();
    });
  };

  return Handler;
}();

exports.default = Handler;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _View = __webpack_require__(22);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  View: _View2.default
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View() {
  _classCallCheck(this, View);
};

exports.default = View;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _activity = __webpack_require__(24);

var _activity2 = _interopRequireDefault(_activity);

var _appcompat = __webpack_require__(25);

var _appcompat2 = _interopRequireDefault(_appcompat);

var _core = __webpack_require__(28);

var _core2 = _interopRequireDefault(_core);

var _fragment = __webpack_require__(30);

var _fragment2 = _interopRequireDefault(_fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  activity: _activity2.default, appcompat: _appcompat2.default, core: _core2.default, fragment: _fragment2.default
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ComponentActivity = __webpack_require__(4);

var _ComponentActivity2 = _interopRequireDefault(_ComponentActivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ComponentActivity: _ComponentActivity2.default
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(26);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  app: _app2.default
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ActionBar = __webpack_require__(6);

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _AppCompatActivity = __webpack_require__(27);

var _AppCompatActivity2 = _interopRequireDefault(_AppCompatActivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ActionBar: _ActionBar2.default,
  AppCompatActivity: _AppCompatActivity2.default
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ActionBar = __webpack_require__(6);

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _FragmentActivity2 = __webpack_require__(7);

var _FragmentActivity3 = _interopRequireDefault(_FragmentActivity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */


var AppCompatActivity = function (_FragmentActivity) {
  _inherits(AppCompatActivity, _FragmentActivity);

  function AppCompatActivity() {
    _classCallCheck(this, AppCompatActivity);

    return _possibleConstructorReturn(this, _FragmentActivity.apply(this, arguments));
  }

  // eslint-disable-next-line class-methods-use-this
  AppCompatActivity.prototype.getSupportActionBar = function getSupportActionBar() {
    return new _ActionBar2.default();
  };

  return AppCompatActivity;
}(_FragmentActivity3.default);

exports.default = AppCompatActivity;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(29);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  app: _app2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ComponentActivity = undefined;

var _ComponentActivity = __webpack_require__(5);

var _ComponentActivity2 = _interopRequireDefault(_ComponentActivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ComponentActivity = _ComponentActivity2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(31);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  app: _app2.default
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FragmentActivity = __webpack_require__(7);

var _FragmentActivity2 = _interopRequireDefault(_FragmentActivity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  FragmentActivity: _FragmentActivity2.default
};

/***/ })
/******/ ]);