import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Main from '../views/home/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    },
    {
      // 评论列表
      path: 'comment',
      component: () => import('../views/comment')
    },
    {
      // 发布文章
      path: 'publish',
      component: () => import('../views/publish')
    },
    {
      // 内容列表
      path: 'articles',
      component: () => import('../views/articles')
    },
    {
      // 素材管理
      path: 'material',
      component: () => import('../views/material')
    },
    {
      // 账户信息
      path: 'account',
      component: () => import('../views/account')
    },
    {
      // 图文数据
      path: 'fansdata',
      component: () => import('../views/fansdata')
    },
    {
      // 粉丝概况
      path: 'fansinfo',
      component: () => import('../views/fansinfo')
    },
    {
      // 粉丝列表
      path: 'fanslist',
      component: () => import('../views/fanslist')
    },
    {
      // 粉丝画像
      path: 'fansimg',
      component: () => import('../views/fansimg')
    }]
  }

]

const router = new VueRouter({
  routes
})

export default router
