import { login, getInfo } from 'api/login'
import { Message } from 'element-ui'
import router from '@/router'

const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: '',
    roles: [],
    introduce: ''
  },
  mutations: {
    SET_TOKEN (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    DEL_TOKEN (state) {
      state.token = ''
      state.userName = ''
      state.roles = ''
      state.introduce = ''
      localStorage.removeItem('token')
    },
    SET_ROLES (state, payload) {
      state.roles = payload
    },
    SET_NAME (state, payload) {
      state.username = payload
    },
    SET_INTRODUCE (state, payload) {
      state.introduce = payload
    }
  },
  actions: {
    _login ({ commit }, formData) {
      return new Promise((resolve, reject) => {
        login(formData).then(res => {
          if (res.code === 200) {
            commit('SET_TOKEN', res.data.token)
            Message.success(res.msg)
          } else {
            Message.error(res.msg)
          }
          resolve(res)
        })
      })
    },
    _getInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          if (res.code === 200) {
            const { name, roles, introduce } = res.data
            commit('SET_ROLES', roles)
            commit('SET_NAME', name)
            commit('SET_INTRODUCE', introduce)
          } else {
            Message.error(res.msg)
          }
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    _loginOut ({ commit }) {
      commit('DEL_TOKEN')
      router.push({
        path: '/login',
        query: {
          redirect: '/'
        }
      })
    }
  }
}
export default user
