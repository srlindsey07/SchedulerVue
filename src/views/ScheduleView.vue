<script setup lang="ts">
import AppCalendar from '@/components/AppCalendar/AppCalendar.vue'
import { useAppointmentsStore } from '@/stores/appointments-store'

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
    <AppCalendar
        :providers="providers"
        :appointments="appointments"
    />
</template>
