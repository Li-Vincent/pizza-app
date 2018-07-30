// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'

import {routes} from './routes/routes'

import {store} from './store/store.js'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd9077913423avyuea.wilddogio.com/'
Vue.prototype.$axios = axios


const router = new VueRouter({
    routes,
    mode:'history',
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      // return {x:0,y:100}
      // return {selector:".btn"}
      if(savedPosition){
        return savedPosition
      } else {
        return {x:0,y:0}
      }
    }
  })

Vue.config.productionTip = false

// 全局首位
// router.beforeEach((to,from,next)=>{
//   if(to.path=='login'|| to.path=='register'){
//     next();
//   } 
//   else {
//     alert('请先登录');
//     next('/login');
//   }
// })

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
