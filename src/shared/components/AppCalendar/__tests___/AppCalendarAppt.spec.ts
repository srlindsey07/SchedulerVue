import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import AppCalendarAppt from '../AppCalendarAppt.vue'
import { mockAppointments } from '@/data/mock-appointments'
import { TimeFormat } from '@/shared/types/calendar-models'
import { AppointmentType } from '@/shared/types/appointment-models'

describe('AppCalendarAppt', () => {
    beforeEach(() => {})

    it('should display appointment time and type, patient name and provider name', () => {
        const appt = mockAppointments[0]
        const provider = 'Provider Name'

        const wrapper = mount(AppCalendarAppt, {
            props: {
                appointment: appt,
                providerName: provider,
            },
        })

        expect(wrapper.text()).toContain(appt.start.format(TimeFormat.DISPLAY))
        expect(wrapper.text()).toContain(appt.patientShortName)
        expect(wrapper.text()).toContain(appt.type)
        expect(wrapper.text()).toContain(provider)
    })

    describe('background color', () => {
        it('should be "sky" if type is routine', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.ROUTINE
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-sky-100')
            expect(wrapper.classes()).toContain('text-sky-700')
            expect(wrapper.classes()).toContain('border-sky-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.ROUTINE.toString(),
            )
        })

        it('should be "orange" if type is urgent', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.URGENT
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-orange-100')
            expect(wrapper.classes()).toContain('text-orange-700')
            expect(wrapper.classes()).toContain('border-orange-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.URGENT.toString(),
            )
        })

        it('should be "lime" if type is follow up', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.FOLLOW_UP
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-lime-100')
            expect(wrapper.classes()).toContain('text-lime-700')
            expect(wrapper.classes()).toContain('border-lime-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.FOLLOW_UP.toString(),
            )
        })

        it('should be "violet" if type is new patient', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.NEW_PATIENT
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-violet-100')
            expect(wrapper.classes()).toContain('text-violet-700')
            expect(wrapper.classes()).toContain('border-violet-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.NEW_PATIENT.toString(),
            )
        })

        it('should be "pink" if type is office visit', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.OFFICE_VISIT
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-pink-100')
            expect(wrapper.classes()).toContain('text-pink-700')
            expect(wrapper.classes()).toContain('border-pink-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.OFFICE_VISIT.toString(),
            )
        })

        it('should be "slate" if type is unknown', () => {
            const appt = mockAppointments[0]
            appt.type = AppointmentType.UNKNOWN
            const provider = 'Provider Name'

            const wrapper = mount(AppCalendarAppt, {
                props: {
                    appointment: appt,
                    providerName: provider,
                },
            })
            expect(wrapper.classes()).toContain('bg-slate-100')
            expect(wrapper.classes()).toContain('text-slate-700')
            expect(wrapper.classes()).toContain('border-slate-200')
            expect(wrapper.classes()).toContain(
                AppointmentType.UNKNOWN.toString(),
            )
        })
    })
})
