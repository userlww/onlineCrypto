import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/index.vue'
import about from '../page/about/index.vue'
import services from '../page/services/index.vue'
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
    },

    {
      path:'/services',
      name:'services',
      component:services
    }
  ]
})
