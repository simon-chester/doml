// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/:year(\\d+)/:month(\\d+)/:day(\\d+)',
        name: 'LifeDaysCalculator',
        component: () => import('@/views/LifeDaysCalculator.vue'),
        props: (route: { params: { day: number; month: number; year: number } }) => ({
          ...route.params,
          day: +route.params.day,
          month: +route.params.month,
          year: +route.params.year
      })
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
