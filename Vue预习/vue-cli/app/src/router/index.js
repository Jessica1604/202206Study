import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/detail/:name',
    name: 'Detail',
    component: () => import('../views/detail.vue')

  },
  {
    path: '*',
    component: () => import('../views/notFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
   if (to.meta.auth){
      if (store.state.user.isLogin) {
         next()
      } else {
        next('/login?redirect=' + to.fullPath)
      }
   }else {
     next()
   }
})

export default router
