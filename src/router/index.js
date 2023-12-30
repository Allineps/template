// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    component: () => import('@/layouts/outter/outter.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
     },
 ],
  },
  {
    path:'/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/layouts/default/Default.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
