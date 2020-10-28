const getters = {
  opened: state => {
    if (state.app.opened === 'false') {
      return false
    } else if (state.app.opened === 'true') {
      return true
    }
  },
  token: state => state.user.token,
  roles: state => state.user.roles,
  username: state => state.user.username,
  routes: state => state.permission.routes
}
export default getters
