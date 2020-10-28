import { request } from 'network/request'

export function login ({ user, password }) {
  return request({
    url: '/login',
    method: 'POST',
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
