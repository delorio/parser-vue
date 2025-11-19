import { createRouter, createWebHistory } from 'vue-router'

let router;
router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/Pages/Settings.vue')
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('@/Pages/Review.vue')
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('@/Pages/Authorization.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/Pages/Registration.vue')
    },
  ],
});

export default router
