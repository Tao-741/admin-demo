import { request } from 'network/request'

export function login ({ user, password }) {
  return request({
    url: '/login',
    params: {
      user,
      password
    }
  })
}

export function getInfo () {
  return request({
    url: '/getInfo'
  })
}
