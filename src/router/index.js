import Vue from 'vue'
import Router from 'vue-router'
import ExampleRoutes from './modules/example.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/example',
    },
    ...ExampleRoutes,
  ],
})
