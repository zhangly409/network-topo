/**
 * 封装 axios 通用配置和请求错误的提示
 */
import _axios from 'axios'
import router from '../../router'

const axios = _axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
})
axios.interceptors.request.use(config => {
  config.withCredentials = true
  if (!config.timeout) {
    config.timeout = 10000
  }
  return config
})

axios.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.log(error)
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          window.alert('请求错误：' + error.response.data.msg + '\n错误信息：' + error.response.data.data)
          break
        // 401: 用户认证失败
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          })
          break
        // 404: 访问的路径不存在
        case 404:
          router.replace({
            path: '/error',
          })
          break
        // 其他错误，直接抛出错误提示
        default:
          window.alert(error.response.data.msg + '\n错误信息：' + error.response.data.data)
      }
      return Promise.reject(error.response)
    }
  },
)

export default axios
