import { createRouter, createWebHistory } from 'vue-router'
import ScheduleView from '@/views/ScheduleView.vue'
import PatientsView from '@/views/PatientsView.vue'

export enum RouteName {
    HOME = 'home',
    SCHEDULE = 'schedule',
    PROVIDERS = 'providers',
    PATIENTS = 'patients',
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: RouteName.HOME,
            redirect: (to) => {
                return RouteName.SCHEDULE
            },
        },
        {
            path: '/schedule',
            name: RouteName.SCHEDULE,
            component: ScheduleView,
        },
        {
            path: '/providers',
            name: RouteName.PROVIDERS,
            redirect: (to) => {
                return RouteName.SCHEDULE
            },
        },
        {
            path: '/patients',
            name: RouteName.PATIENTS,
            component: PatientsView,
        },
    ],
})

export default router
