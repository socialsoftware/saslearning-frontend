import Vue from 'vue'
import Router from 'vue-router'

import FullLayout from '@/components/layout/FullLayout'

import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'
import Documents from '@/views/Documents'
import DocumentViewer from '@/views/DocumentViewer'
import Models from '@/views/Models'
import ModelViewer from '@/views/ModelViewer'
import Activities from '@/views/Activities'
import Teams from '@/views/Teams'
import SignIn from '@/views/SignIn'

import NewDocument from '@/components/NewDocument'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/documents/create',
      name: 'post-document',
      component: NewDocument
    },
    {
      path: '',
      component: FullLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/documents',
          name: 'documents',
          component: Documents
        },
        {
          path: '/documents/:id',
          name: 'document',
          component: DocumentViewer,
          props (route) {
            const props = { ...route.params }
            props.id = +props.id
            return props
          }
        },
        {
          path: '/models',
          name: 'models',
          component: Models
        },
        {
          path: '/models/:id',
          name: 'model',
          component: ModelViewer,
          props (route) {
            const props = { ...route.params }
            props.id = +props.id
            return props
          }
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
    }
  ]
})
