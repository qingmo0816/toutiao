import Vue from 'vue'
import App from './App.vue'
import router from './premission'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/axios.config'
import Component from './components' // 引入自定义组件

Vue.config.productionTip = false

Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
Vue.use(ElementUI)
Vue.use(Component) // 全局注册自定义组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
