import {OBJECT} from "oneutil"
import android2weixin from "./android2weixin/index"
import src from "./src/main/index"
let result = {}
result = OBJECT.assign(result,android2weixin)
result = OBJECT.assign(result,src)
result = OBJECT.assign(result,require("./customcapture/src/main/index"))
result = OBJECT.assign(result,require("./debug/src/main/index"))
result = OBJECT.assign(result,require("./live/src/main/index"))
result = OBJECT.assign(result,require("./rtc/src/main/index"))
result = OBJECT.assign(result,require("./screen/src/main/index"))
module.exports = result