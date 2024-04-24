import {
    Appointment,
    AppointmentStatus,
    AppointmentType,
} from '@/shared/types/appointment-models'
import moment from 'moment'

export const mockAppointments = [
    new Appointment(
        '6621027efc13ae0dc5a2424f',
        '65ff4b94fc13ae7bd250faa8',
        'Y. Duf',
        '65ff4be0fc13ae7d2050faa1',
        moment().set({ hour: 8, minute: 30 }),
        moment().set({ hour: 9, minute: 0 }),
        AppointmentStatus.CANCELED,
        AppointmentType.URGENT,
    ),
    new Appointment(
        '6621027efc13ae0dc5a24250',
        '65ff4b94fc13ae7bd250faac',
        'J. Bal',
        '65ff4be0fc13ae7d2050fa9d',
        moment().set({ hour: 9, minute: 30 }),
        moment().set({ hour: 10, minute: 0 }),
        AppointmentStatus.CONFIRMED,
        AppointmentType.ROUTINE,
    ),
    new Appointment(
        '6621027efc13ae0dc5a24251',
        '65ff4b94fc13ae7bd250faaa',
        'A. Cha',
        '65ff4be0fc13ae7d2050fa9d',
        moment().set({ hour: 2, minute: 0 }),
        moment().set({ hour: 2, minute: 30 }),
        AppointmentStatus.SCHEDULED,
        AppointmentType.NEW_PATIENT,
    ),
]
