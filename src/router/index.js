import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./../views/Dashboard')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import('./../views/Projects') // Add Projects component
  },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: () => import('./../views/Profile') // Add Profile component
  // },
  {
  path: '/task',
    name: 'task',
    component: () => import('./../views/Task') // Add Tasks component
  },
  // {
  //   path: '/teams',
  //   name: 'teams',
  //   component: () => import('./../views/Teams') // Add Teams component
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
