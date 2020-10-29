import { request } from 'network/request'

export function getTableData (params) {
  return request({
    url: '/basic/getTable',
    method: 'get',
    params
  })
}
