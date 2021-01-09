import {OBJECT} from "oneutil"
import android2weixin from './android2weixin/index'
import app from './app/java/index'
import customcapture from './customcapture/java/index'
import debug from './debug/java/index'
import live from './live/java/index'
import rtc from './rtc/java/index'
import screen from './screen/java/index'
let java = android2weixin
java = OBJECT.assign(java,app)
java = OBJECT.assign(java,customcapture)
java = OBJECT.assign(java,debug)
java = OBJECT.assign(java,live)
java = OBJECT.assign(java,rtc)
java = OBJECT.assign(java,screen)
module.exports = java