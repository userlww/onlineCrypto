import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import about from '../page/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
  
    {
      path:'/about',
      name:'about',
      component: about
    }
  ]
})
