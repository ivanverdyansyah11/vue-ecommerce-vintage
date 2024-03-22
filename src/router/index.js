import { createRouter, createWebHistory } from 'vue-router'
// import MainPage from '../views/MainPage.vue'
// import DetailProduct from '../views/DetailProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: () => import('../views/MainPage.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailProduct.vue'),
    },
  ]
})

export default router
