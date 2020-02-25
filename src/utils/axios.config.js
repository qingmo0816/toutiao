// 统一注入token 设置请求拦截器  响应拦截器

import axios from 'axios'
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
}, function () {})
export default axios
