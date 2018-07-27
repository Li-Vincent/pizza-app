// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import { routes } from './routes/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

// 全局首位
router.beforeEach((to,from,next)=>{
  if(to.path=='login'|| to.path=='register'){
    next();
  } 
  else {
    alert('请先登录');
    next('/login');
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
