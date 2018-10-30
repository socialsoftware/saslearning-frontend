import Vue from 'vue'
import Cookies from 'js-cookie'
import store from './store'
import Router from 'vue-router'

import FullLayout from '@/components/layout/FullLayout'

import Home from '@/views/Home'
import AdministrationDashboard from '@/views/AdministrationDashboard'
import UserDashboard from '@/views/UserDashboard'
import Documents from '@/views/Documents'
import DocumentViewer from '@/views/DocumentViewer'
import Models from '@/views/Models'
import ModelViewer from '@/views/ModelViewer'
import Activities from '@/views/Activities'
import Activity from '@/views/Activity'
import Teams from '@/views/Teams'
import Team from '@/views/Team'
import SignIn from '@/views/SignIn'

import NewDocument from '@/components/NewDocument'
import ModelForm from '@/components/ModelForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      props: true,
      component: SignIn
    },
    {
      path: '/documents/create',
      name: 'post-document',
      component: NewDocument
    },
    {
      path: '/models/create',
      name: 'create-model',
      component: ModelForm,
      props: {
        title: 'models.new.header',
        breadcrumbTitle: 'models.new.breadcrumb'
      }
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
          path: '/administration',
          name: 'administration-dashboard',
          component: AdministrationDashboard
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: UserDashboard,
          meta: {
            requiresAuth: true
          }
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
          path: '/activities/:id',
          name: 'activity',
          component: Activity,
          props (route) {
            const props = { ...route.params }
            props.id = +props.id
            return props
          }
        },
        {
          path: '/teams',
          name: 'teams',
          component: Teams
        },
        {
          path: '/teams/:id',
          name: 'team',
          component: Team,
          props (route) {
            const props = { ...route.params }
            props.id = +props.id
            return props
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, _, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !store.getters.loggedUser && Cookies.get('AUTH') === undefined) {
    next({
      name: 'sign-in',
      params: { nextUrl: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
