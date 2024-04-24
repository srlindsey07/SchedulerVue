import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import AppCalendar from '../AppCalendar.vue'
import { mockProviders } from '@/data/mock-users'
import { mockAppointments } from '@/data/mock-appointments'
import moment from 'moment'
import { DateFormat } from '@/shared/types/calendar-models'

describe('AppCalendar', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
        wrapper = mount(AppCalendar, {
            props: {
                providers: mockProviders,
                appointments: mockAppointments,
                selectedDate: moment(),
            },
        })
    })

    it('should contain the selected date in MMMM D, YYYY format', () => {
        const headerText = wrapper.get('.calendar-header').text()
        expect(headerText).toContain(moment().format(DateFormat.DISPLAY))
    })
})
