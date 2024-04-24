import {
    Appointment,
    AppointmentStatus,
    AppointmentType,
} from '@/shared/types/appointment-models'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import appointmentData from '@/data/appointments.json'
import moment, { type Moment } from 'moment'

export const useAppointmentsStore = defineStore('appointments', () => {
    // state
    const appointments = ref<Appointment[]>([])

    // getters

    // actions
    function fetchAppointments(startDate: Moment, endDate: Moment) {
        const allAppts: Appointment[] = appointmentData.map(
            (appt) =>
                new Appointment(
                    appt.id,
                    appt.patientId,
                    appt.patientShortName,
                    appt.providerId,
                    moment(appt.start),
                    moment(appt.end),
                    AppointmentStatus[
                        appt.status as keyof typeof AppointmentStatus
                    ],
                    AppointmentType[appt.type as keyof typeof AppointmentType],
                ),
        )
        appointments.value = allAppts.filter((appt) => {
            return (
                moment(appt.start).isSameOrAfter(moment(startDate)) &&
                moment(appt.end).isSameOrBefore(moment(endDate))
            )
        })
    }

    return { appointments, fetchAppointments }
})
