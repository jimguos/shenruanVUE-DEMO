import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    // 当前项目内部已经对 index.vue和 index.js文件做了默认的索引寻找配置，如果一个目录名字没有明确设置要找到的文件，那么优先寻找index.vue或index.js
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
      redirect: '/welcome', // 路由重定向
      children: [
        // 欢迎页面子路由配置
        { path: '/unitOne', name: 'unitOne', component: () => import('@/views/address/unitOne') },
        { path: '/unitTwo', name: 'unitTwo', component: () => import('@/views/address/unitTwo') },
        { path: '/unitThree', name: 'unitThree', component: () => import('@/views/address/unitThree') },
        { path: '/unitFour', name: 'unitFour', component: () => import('@/views/address/unitFour') },
        { path: '/welcome', name: 'welcome', component: () => import('@/views/welcome') },
        { path: '/search', name: 'search', component: () => import('@/views/search') }

      ]
    }
  ]
})

// 设置前置路由守卫

export default router
