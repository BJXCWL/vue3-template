import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/login/Register.vue'
import Forget from '@/views/login/Forget.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title:'首页'
      }
    },
    {
      path: '/user',
      name: '用户',
      meta: {
        title:'用户',
        hideMenu: true,
      },
      children:[
        {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {
            title:'登录',
            hideMenu: true,
          }
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
          meta: {
            title:'注册',
            hideMenu: true,
          }
        },
        {
          path: '/forget',
          name: 'forget',
          component: Forget,
          meta: {
            title:'忘记密码',
            hideMenu: true,
          }
        },
      ]
    },
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title:'关于'
      }
    },
  ],
})

export default router
