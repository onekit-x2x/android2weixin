import {OBJECT} from "oneutil"
import android2weixin from "../android2weixin/index"
import src from "./src/main/index"
import debug from "../debug/src/main/index"
let result = {}
result = OBJECT.assign(result,android2weixin)
result = OBJECT.assign(result,src)
result = OBJECT.assign(result,debug)
module.exports = result