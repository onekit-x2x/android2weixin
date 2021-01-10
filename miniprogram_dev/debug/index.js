import {OBJECT} from "oneutil"
import android2weixin from "../android2weixin/index"
import src from "./src/main/index"
let result = android2weixin
result = OBJECT.assign(result,src)
module.exports = result