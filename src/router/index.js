import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/Signup.vue'),
    },
    {
      path: '/',
      redirect:'/mainpage',
      component: () => import('../views/layout/Homepage.vue'),
      children: [
        {
          path: '/mainpage',
          name: 'mainpage',
          component: () => import('../views/Homepage/Mainpage.vue'),
        },
        {
          path: '/mainpage/products',
          name: 'products',
          component: () => import('../views/Homepage/Products.vue'),
        },
        {
          path: '/mainpage/detail',
          name: 'detail',
          component: () => import('../views/Homepage/Detail.vue'),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/Homepage/Profile.vue'),
        },
      ]
    },
  ]
})

export default router
