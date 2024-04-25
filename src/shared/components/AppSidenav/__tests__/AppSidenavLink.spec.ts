import { flushPromises, mount, shallowMount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import AppSidenavLink from '../AppSidenavLink.vue'

describe('AppSidenavLink', () => {
    const icon = ['fas', 'calendar-days']
    const label = 'Test Label'
    let wrapper: VueWrapper

    beforeEach(() => {
        wrapper = shallowMount(AppSidenavLink, {
            props: {
                icon: icon,
                label: label,
                active: true,
            },
        })
    })

    afterEach(() => {
        wrapper.unmount()
    })

    it('should contain the class "active" if active is true', () => {
        expect(wrapper.classes()).toContain('active')
    })

    it('should not contain the class "active" if active is false', async () => {
        wrapper.setProps({ active: false })
        await flushPromises()

        expect(wrapper.classes()).not.toContain('active')
    })

    it('should pass the icon to FontAwesomeIcon', () => {
        expect(
            wrapper
                .get('[data-test-id="sidenav-link-icon"]')
                .attributes('icon'),
        ).toBe(icon.join(','))
    })

    it('should contain the label provided', () => {
        expect(wrapper.text()).toContain(label)
    })
})
