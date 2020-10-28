import axios from 'axios'

export function request (config) {
  // 1. 创建实例
  const instance = axios.create({
    baseURL: '',
    timeout: 3000
  })
  // 2. 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  // 2. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}
