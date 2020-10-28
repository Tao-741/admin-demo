const getters = {
  opened: state => {
    if (state.app.opened === 'false') {
      return false
    } else if (state.app.opened === 'true') {
      return true
    }
  },
  routes: state => state.permission.routes
}
export default getters
