import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Documents from './views/Documents.vue'
import Models from './views/Models.vue'
import Activities from './views/Activities.vue'
import Teams from './views/Teams.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
    {
      path: '/models',
      name: 'models',
      component: Models
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    }
  ]
})
