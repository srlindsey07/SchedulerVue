import type { Moment } from 'moment'

export class Appointment {
    id: string
    patientId: string
    patientShortName: string
    providerId: string
    start: Moment
    end: Moment
    status: AppointmentStatus
    type: AppointmentType

    constructor(
        id: string,
        patientId: string,
        patientShortName: string,
        providerId: string,
        start: Moment,
        end: Moment,
        status: AppointmentStatus,
        type: AppointmentType,
    ) {
        this.id = id
        this.patientId = patientId
        this.patientShortName = patientShortName
        this.providerId = providerId
        this.start = start
        this.end = end
        this.status = status
        this.type = type
    }
}

export enum AppointmentStatus {
    SCHEDULED = 'SCHEDULED',
    CONFIRMED = 'CONFIRMED',
    CANCELED = 'CANCELED',
    COMPLETE = 'COMPLETE',
}

export enum AppointmentType {
    ROUTINE = 'ROUTINE',
    URGENT = 'URGENT',
    FOLLOW_UP = 'FOLLOW_UP',
    NEW_PATIENT = 'NEW_PATIENT',
    OFFICE_VISIT = 'OFFICE_VISIT',
    UNKNOWN = 'UNKNOWN',
}

// Color associated with each appointment type
export const appointmentTypeColorMap = new Map<AppointmentType, string>([
    [AppointmentType.ROUTINE, 'sky'],
    [AppointmentType.URGENT, 'orange'],
    [AppointmentType.FOLLOW_UP, 'lime'],
    [AppointmentType.NEW_PATIENT, 'violet'],
    [AppointmentType.OFFICE_VISIT, 'pink'],
    [AppointmentType.UNKNOWN, 'slate'],
])
