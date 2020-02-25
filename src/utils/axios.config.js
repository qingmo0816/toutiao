// 统一注入token 设置请求拦截器  响应拦截器

import axios from 'axios'
import router from '../premission'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址

// 请求拦截器
axios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('user-token') // 获取token
  // config 是axios默认的请求配置 和传入配置 结合出来的
  // config必须 return
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function () { })

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  const status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期 清除垃圾token
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message })
  return new Promise(function () {}) // 直接返回一个 promise 对象，表示错误已经被处理掉了，错误被强行截止掉了
})
export default axios
