import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'
// 引入全局样式控制文件
import '@/assets/css/global.css'
import ElementUI from 'element-ui'
// 注册ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  // 挂载store
  router,
  render: h => h(App)
}).$mount('#app')
