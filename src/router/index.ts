import { createRouter, createWebHistory } from 'vue-router'
import ScheduleView from '@/views/ScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: to => { return 'schedule' }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
        path: '/providers',
        name: 'providers',
        redirect: to => { return 'schedule' }
    },
    {
        path: '/patients', 
        name: 'patients',
        redirect: to=> { return 'schedule' }
    }
  ]
})

export default router
