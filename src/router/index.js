import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Suggest from '@/components/Suggest'
import City from '@/components/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
