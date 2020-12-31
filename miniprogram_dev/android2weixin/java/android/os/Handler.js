export default class Handler {
  // eslint-disable-next-line class-methods-use-this
  postDelayed(runnable) {
    setTimeout(() => {
      runnable.run()
    })
  }
}
