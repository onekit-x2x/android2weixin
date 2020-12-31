/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
export default class Activity {
  onCreate() {

  }

  setContentView() {

  }

  findViewById(id) {
    // let context
    // await new Promise((resolve) => {
      console.log(this.PAGE)
    wx.createSelectorQuery().in(this.PAGE).select(`#${id}`).context(function (res) {
      console.log('context', res)
    }).exec((res) => {
      console.log('exec', res)
    })
    return {
      setOnClickListener() {
      },
      setVisibility() {

      }
    }
  }
}
