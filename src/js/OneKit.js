/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const TT_USER_FOLDER = 'ttfile://user/'
const WX_USER_FOLDER = `${wx.env.USER_DATA_PATH}/`
export default class OneKit {
  static get current() {
    const pages = getCurrentPages()
    if (pages.length === 0) {
      return {}
    }
    return pages[pages.length - 1]
  }

  static get currentUrl() {
    return this.current.route
  }

  static new_tt_filePath(ext) {
    const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
    const tt_filePath = `${TT_USER_FOLDER}${randomString}${ext}`
    return tt_filePath
  }

  static tt_filePath2wx_filePath(tt_filePath) {
    if (!getApp().ttSavePath2wxStorePath) {
      return tt_filePath
    }

    const wx_storePath = getApp().ttSavePath2wxStorePath[tt_filePath]
    if (wx_storePath) {
      return wx_storePath
    } else {
      const wx_filePath = tt_filePath.replace(TT_USER_FOLDER, WX_USER_FOLDER)
      return wx_filePath
    }
  }

  static save_wx_storePath(tt_filePath, wx_storePath) {
    if (!getApp().ttSavePath2wxStorePath) {
      getApp().ttSavePath2wxStorePath = {}
    }

    getApp().ttSavePath2wxStorePath[tt_filePath] = wx_storePath
    // ///////////////////////

    if (!getApp().wxStorePath2ttSavePath) {
      getApp().wxStorePath2ttSavePath = {}
    }

    getApp().wxStorePath2ttSavePath[wx_storePath] = tt_filePath
  }
}
