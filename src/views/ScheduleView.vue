<script setup lang="ts">
import { useAppointmentsStore } from '@/stores/appointments-store'
import { useUsersStore } from '@/stores/users-store'
import { storeToRefs } from 'pinia'
import moment from 'moment'
import { ref, watch } from 'vue'
import AppCalendar from '@/shared/components/AppCalendar/AppCalendar.vue'

const usersStore = useUsersStore()
const apptsStore = useAppointmentsStore()

// store actions
const { fetchUsers } = usersStore
const { fetchAppointments } = apptsStore

// store data/getters
const { providers } = storeToRefs(usersStore)
const { appointments } = storeToRefs(apptsStore)

const selectedDate = ref(moment())

fetchUsers()
watch(
    selectedDate,
    (newValue) => {
        fetchAppointments(
            moment(newValue).startOf('day'),
            moment(newValue).endOf('day'),
        )
    },
    { immediate: true },
)
</script>

<template>
    <AppCalendar
        :providers="providers"
        :appointments="appointments"
        v-model:selectedDate="selectedDate"
    />
</template>
