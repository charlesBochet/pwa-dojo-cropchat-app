import Vue from 'vue'
import Router from 'vue-router'
import { Add, Hello } from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
