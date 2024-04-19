<script setup lang="ts">
import AppCalendar from '@/components/AppCalendar/AppCalendar.vue'
import { useAppointmentsStore } from '@/stores/appointments-store'
import AppButton from '@/components/AppButton/AppButton.vue'
import AppButtonGroup from '@/components/AppButton/AppButtonGroup.vue'

import { useUsersStore } from '@/stores/users-store'
import { storeToRefs } from 'pinia'
import moment, { type Moment } from 'moment'

const usersStore = useUsersStore()
const apptsStore = useAppointmentsStore()

// store actions
const { fetchUsers } = usersStore
const { fetchAppointments } = apptsStore

// store data/getters
const { providers } = storeToRefs(usersStore)
const { appointments } = storeToRefs(apptsStore)

fetchUsers()
fetchAppointments(moment().startOf('day'), moment().endOf('day'))
</script>

<template>
    <AppButton
        label="Default"
        variant="default"
    />
    <AppButton
        label="Primary"
        variant="primary"
    />
    <AppButton
        label="Outline"
        variant="outline"
    />
    <AppButton
        label="Text"
        variant="text"
    />

    <AppButtonGroup variant="primary">
        <AppButton label="Default1" />
        <AppButton label="Default2" />
        <AppButton label="Default3" />
    </AppButtonGroup>

    <AppCalendar
        :providers="providers"
        :appointments="appointments"
    />
</template>
