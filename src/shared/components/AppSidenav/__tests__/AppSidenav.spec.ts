import { beforeEach, describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import AppSidenav from '../AppSidenav.vue'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { RouteName, routes } from '@/router'

describe('AppSidenav', () => {
    let router: Router
    let wrapper: VueWrapper

    beforeEach(async () => {
        router = createRouter({
            history: createWebHistory(),
            routes: routes,
        })

        wrapper = mount(AppSidenav, {
            global: {
                plugins: [router],
                stubs: ['AppSidenavLink'],
            },
        })
    })

    it('should mark the Patient link as active if current route', async () => {
        router.push({ name: RouteName.PATIENTS })
        await router.isReady()

        expect(wrapper.find('[label="Patients"]').attributes('active')).toBe(
            'true',
        )
    })

    it('should mark the Schedule link as active if current route', async () => {
        router.push({ name: RouteName.SCHEDULE })
        await router.isReady()

        expect(wrapper.find('[label="Schedule"]').attributes('active')).toBe(
            'true',
        )
    })
})
