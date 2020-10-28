import { request } from 'network/request'

export function getInfo () {
  return request({
    url: '/getInfo'
  })
}
