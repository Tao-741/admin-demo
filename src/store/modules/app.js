
const app = {
  state: {
    opened: sessionStorage.getItem('open') ? sessionStorage.getItem('open') : 'false',
    msgIsShow: false
  },
  mutations: {
    SET_OPENED (state, payload) {
      state.opened = String(payload)
      sessionStorage.setItem('open', payload)
    },
    SET_MSGISOPEN (state) {
      state.msgIsShow = !state.msgIsShow
    }
  }
}
export default app
