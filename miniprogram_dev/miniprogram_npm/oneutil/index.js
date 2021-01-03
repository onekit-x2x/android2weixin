module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1609649221490, function(require, module, exports) {
var __TEMP__ = require('./BOOLEAN');var BOOLEAN = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./COLOR');var COLOR = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./DATE');var DATE = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./HTML');var HTML = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./PATH');var PATH = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./PROMISE');var PROMISE = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./STRING');var STRING = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./TASK');var TASK = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./URL');var URL = __REQUIRE_DEFAULT__(__TEMP__);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'BOOLEAN', { enumerable: true, configurable: true, get: function() { return BOOLEAN; } });Object.defineProperty(exports, 'COLOR', { enumerable: true, configurable: true, get: function() { return COLOR; } });Object.defineProperty(exports, 'DATE', { enumerable: true, configurable: true, get: function() { return DATE; } });Object.defineProperty(exports, 'HTML', { enumerable: true, configurable: true, get: function() { return HTML; } });Object.defineProperty(exports, 'PATH', { enumerable: true, configurable: true, get: function() { return PATH; } });Object.defineProperty(exports, 'PROMISE', { enumerable: true, configurable: true, get: function() { return PROMISE; } });Object.defineProperty(exports, 'STRING', { enumerable: true, configurable: true, get: function() { return STRING; } });Object.defineProperty(exports, 'TASK', { enumerable: true, configurable: true, get: function() { return TASK; } });Object.defineProperty(exports, 'URL', { enumerable: true, configurable: true, get: function() { return URL; } });


}, function(modId) {var map = {"./BOOLEAN":1609649221491,"./COLOR":1609649221492,"./DATE":1609649221493,"./HTML":1609649221494,"./PATH":1609649221495,"./PROMISE":1609649221496,"./STRING":1609649221497,"./TASK":1609649221498,"./URL":1609649221499}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221491, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class BOOLEAN
{
    static fix(obj) {
        if (typeof obj === 'string') {
          return obj === 'checked'
        } else if (typeof obj === 'boolean') {
          return obj
        } else if (typeof obj === 'number') {
          return obj === 0
        } else {
          return obj != null
        }
      }
};exports.default = BOOLEAN
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221492, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class COLOR {
  static rgba2str(r, g, b, a) {
    function componentToHex(c) {
      c = c.trim()
      const hex = parseInt(c, 10).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a)
  }

  static color(string) {
    let str = string
    if (!str) {
      return null
    }
    const COLORS = {
      aliceblue: '#F0F8FFFF',
      antiquewhite: 'FAEBD7FF',
      aqua: '00FFFFFF',
      aquamarine: '7FFFD4FF',
      azure: 'F0FFFFFF',
      beige: 'F5F5DCFF',
      bisque: 'FFE4C4FF',
      black: '000000FF',
      blanchedalmond: 'FFEBCDFF',
      blue: '0000FFFF',
      blueviolet: '8A2BE2FF',
      brown: 'A52A2AFF',
      burlywood: 'DEB887FF',
      cadetblue: '5F9EA0FF',
      chartreuse: '7FFF00FF',
      chocolate: 'D2691EFF',
      coral: 'FF7F50FF',
      cornflowerblue: '6495EDFF',
      cornsilk: 'FFF8DCFF',
      crimson: 'DC143CFF',
      cyan: '00FFFFFF',
      darkblue: '00008BFF',
      darkcyan: '008B8BFF',
      darkgoldenRod: 'B8860BFF',
      darkgray: 'A9A9A9FF',
      darkgreen: '006400FF',
      darkkhaki: 'BDB76BFF',
      darkmagenta: '8B008BFF',
      darkolivegreen: '556B2FFF',
      darkorange: 'FF8C00FF',
      darkorchid: '9932CCFF',
      darkred: '8B0000FF',
      darksalmon: 'E9967AFF',
      darkseaGreen: '8FBC8FFF',
      darkslateBlue: '483D8BFF',
      darkslateGray: '2F4F4FFF',
      darkturquoise: '00CED1FF',
      darkviolet: '9400D3FF',
      deeppink: 'FF1493FF',
      deepskyblue: '00BFFFFF',
      dimgray: '696969FF',
      dodgerblue: '1E90FFFF',
      feldspar: 'D19275FF',
      firebrick: 'B22222FF',
      floralwhite: 'FFFAF0FF',
      forestgreen: '228B22FF',
      fuchsia: 'FF00FFFF',
      gainsboro: 'DCDCDCFF',
      ghostwhite: 'F8F8FFFF',
      gold: 'FFD700FF',
      goldenRod: 'DAA520FF',
      gray: '808080FF',
      green: '008000FF',
      greenyellow: 'ADFF2FFF',
      honeydew: 'F0FFF0FF',
      hotpink: 'FF69B4FF',
      indianred: 'CD5C5CFF',
      indigo: '4B0082FF',
      ivory: 'FFFFF0FF',
      khaki: 'F0E68CFF',
      lavender: 'E6E6FAFF',
      lavendernlush: 'FFF0F5FF',
      lawngreen: '7CFC00FF',
      lemonchiffon: 'FFFACDFF',
      lightblue: 'ADD8E6FF',
      lightcoral: 'F08080FF',
      lightcyan: 'E0FFFFFF',
      lightgoldenRodYellow: 'FAFAD2FF',
      lightgrey: 'D3D3D3FF',
      lightgreen: '90EE90FF',
      lightpink: 'FFB6C1FF',
      lightsalmon: 'FFA07AFF',
      lightseaGreen: '20B2AAFF',
      lightskyBlue: '87CEFAFF',
      lightslateBlue: '8470FFFF',
      lightslateGray: '778899FF',
      lightsteelBlue: 'B0C4DEFF',
      lightyellow: 'FFFFE0FF',
      lime: '00FF00FF',
      limegreen: '32CD32FF',
      linen: 'FAF0E6FF',
      magenta: 'FF00FFFF',
      maroon: '800000FF',
      mediumaquaMarine: '66CDAAFF',
      mediumblue: '0000CDFF',
      mediumorchid: 'BA55D3FF',
      mediumpurple: '9370D8FF',
      mediumseagreen: '3CB371FF',
      mediumslateblue: '7B68EEFF',
      mediumspringgreen: '00FA9AFF',
      mediumturquoise: '48D1CCFF',
      mediumvioletred: 'C71585FF',
      midnightblue: '191970FF',
      mintcream: 'F5FFFAFF',
      mistyrose: 'FFE4E1FF',
      moccasin: 'FFE4B5FF',
      navajowhite: 'FFDEADFF',
      navy: '000080FF',
      oldlace: 'FDF5E6FF',
      olive: '808000FF',
      olivedrab: '6B8E23FF',
      orange: 'FFA500FF',
      Orangered: 'FF4500FF',
      Orchid: 'DA70D6FF',
      palegoldenrod: 'EEE8AAFF',
      palegreen: '98FB98FF',
      paleturquoise: 'AFEEEEFF',
      palevioletred: 'D87093FF',
      papayawhip: 'FFEFD5FF',
      peachpuff: 'FFDAB9FF',
      peru: 'CD853FFF',
      pink: 'FFC0CBFF',
      plum: 'DDA0DDFF',
      powderblue: 'B0E0E6FF',
      purple: '800080FF',
      red: 'FF0000FF',
      rosybrown: 'BC8F8FFF',
      royalblue: '4169E1FF',
      saddlebrown: '8B4513FF',
      salmon: 'FA8072FF',
      sandybrown: 'F4A460FF',
      seagreen: '2E8B57FF',
      seashell: 'FFF5EEFF',
      sienna: 'A0522DFF',
      silver: 'C0C0C0FF',
      skyblue: '87CEEBFF',
      slateblue: '6A5ACDFF',
      slategray: '708090FF',
      snow: 'FFFAFAFF',
      springgreen: '00FF7FFF',
      steelblue: '4682B4FF',
      tan: 'D2B48CFF',
      teal: '008080FF',
      thistle: 'D8BFD8FF',
      tomato: 'FF6347FF',
      turquoise: '40E0D0FF',
      violet: 'EE82EEFF',
      violetred: 'D02090FF',
      wheat: 'F5DEB3FF',
      white: 'FFFFFFFF',
      whitesmoke: 'F5F5F5FF',
      yellow: 'FFFF00FF',
      yellowgreen: '9ACD32FF'
    }
    const nameColor = COLORS[str.toLowerCase()]
    if (nameColor) {
      return nameColor
    }
    if (str.indexOf('rgb') < 0) {
      if (str.length === 7) {
        str += ''
      }
      return str
    }
    str = str.substring(str.indexOf('(') + 1, str.indexOf(')'))
    const array = str.split(',')
    if (array.length === 3) {
      array.push(1)
    }
    const color = COLOR.rgba2str(array[0], array[1], array[2], array[3] * 255 + '')
    return color
  }

  static str2array(str) {
    return [parseInt(str.substr(1, 2), 16),
      parseInt(str.substr(3, 2), 16),
      parseInt(str.substr(5, 2), 16),
      parseInt(str.substr(7, 2), 16)]
  }

  static array2str(array) {
    function f(v) {
      let s = v.toString(16)
      if (s.length === 1) { s = '0' + s }
      return s
    }
    const str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3])
    return str
  }
};exports.default = COLOR

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221493, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class DATE {
  static monthDays(year, month) {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0) {
      return 31
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return 29
      } else {
        return 28
      }
    } else {
      return 30
    }
  }
};exports.default = DATE

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221494, function(require, module, exports) {
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class HTML {
  static html2nodes(html) {
    function _html2node(xParent) {
      const nodes = []
      for (const xNode of xParent.childNodes) {
        let node
        switch (xNode.nodeType) {
          case 3:
            node = {
              type: 'text',
              text: xNode.nodeValue
            }
            break
          case 1:
            node = {
              name: xNode.tagName.toLowerCase(),
              children: _html2node(xNode),
              attrs: {}
            }
            if (xNode.attributes.class) {
              node.attrs.class = xNode.attributes.class.value
            }
            if (xNode.attributes.style) {
              node.attrs.style = xNode.attributes.style.value
            }
            break
          default:
            console.warn(xNode.nodeType)
            node = null
            break
        }
        if (node) { nodes.push(node) }
      }
      return nodes
    }
    // eslint-disable-next-line no-undef
    const document = new DOMParser().parseFromString(html, 'text/html')
    return _html2node(document.querySelector('body'))
  }

  static nodes2html(nodes) {
    function _node2html(node) {
      const selfCloses = ['br', 'img']
      switch (node.type) {
        case 'text': return node.text
        default: {
          let attributs = ''
          if (node.attrs) {
            for (const key in node.attrs) {
              const value = node.attrs[key]
              attributs += ` ${key}="${value}"`
            }
          }
          //
          const children = node.children ? HTML.nodes2html(node.children) : ''
          if (selfCloses.indexOf(node.name) >= 0) {
            return `<${node.name}${attributs}/>`
          } else {
            return `<${node.name}${attributs}>${children}</${node.name}>`
          }
        }
      }
    }
    let html = ''
    for (const node of nodes) {
      html += _node2html(node)
    }
    return html
  }
};exports.default = HTML

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221495, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class PATH {
  static rel2abs(currentUrl, url) {
    if (url.startsWith('/')) {
      return url.substring(1)
    }
    // //////////////////
    let folder
    if (currentUrl.indexOf('/') >= 0) {
      folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1)
      if (folder.startsWith('/')) {
        folder = folder.substring(1)
      }
    } else {
      folder = ''
    }
    url = url.trim()
    if (url.startsWith('./')) {
      url = url.substring('./'.length)
    }
    while (url.startsWith('../')) {
      folder = folder.substring(0, folder.length - 1)
      folder = folder.substring(0, folder.lastIndexOf('/') + 1)
      url = url.substring('../'.length)
    }

    return folder + url
  }

  static abs2rel(currentUrl, url) {
    url = PATH.rel2abs(currentUrl, url)
    if (currentUrl.startsWith('/')) {
      currentUrl = currentUrl.substring(1)
    }
    const array = currentUrl.split('/')
    let result = ''
    if (array.length > 1) {
      for (let i = 0; i < array.length - 1; i++) {
        result += '../'
      }
    } else {
      result += './'
    }
    result += url
    return result.toString()
  }
};exports.default = PATH

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221496, function(require, module, exports) {
/* eslint-disable camelcase */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221497, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class STRING {
  static firstUpper(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
  }

  static firstLower(str) {
    return str.substr(0, 1).toLowerCase() + str.substr(1)
  }

  static replace(string, str1, str2) {
    let result = ''
    let inTag = false
    for (let i = 0; i < string.length; i++) {
      const chr = string.substr(i, 1)
      switch (chr) {
        case '<':
          inTag = true
          result += chr
          break
        case '>':
          inTag = false
          result += chr
          break
        case str1:
          result += inTag ? chr : str2
          break
        default:
          result += chr
          break
      }
    }
    return result
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrayBuffer) {
    const base64Content = Buffer.from(arrayBuffer).toString('base64')
    return base64Content
  }
};exports.default = STRING

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221498, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (items, func, success) {
  const result = []
  let i = 0
  let itemCallback = null
  itemCallback = function (res) {
    result.push(res)
    if (i >= items.length) {
      success(result)
      return
    }
    func(items[i++], itemCallback)
  }
  func(items[i++], itemCallback)
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609649221499, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class URL {
  constructor(url) {
    const p1 = url.indexOf(':')
    if (p1 > 0) {
      const temp = url.substring(p1 + 1)
      const flag = temp.startsWith('//') ? 3 : 1
      //
      this.scheme = url.substring(0, p1)
      const p2 = url.indexOf('/', p1 + flag)
      if (p2 > 0) {
        this.host = url.substring(p1 + flag, p2)
        const p3 = url.indexOf('?')
        if (p2 < url.length) {
          if (p3 > 0) {
            this.path = url.substring(p2, p3)
          } else {
            this.path = url.substring(p2)
          }
        }
      } else {
        this.host = url.substring(p1 + flag)
      }
    }
    //
    this.params = {}
    const p4 = url.indexOf('?')
    if (p4 > 0) {
      this.querystring = url.substring(p4 + 1)
      const querys = this.querystring.split('&')
      for (const query of querys) {
        const pair = query.split('=')
        this.params[pair[0]] = decodeURIComponent(pair[1])
      }
    }
  }
};exports.default = URL

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1609649221490);
})()
//# sourceMappingURL=index.js.map