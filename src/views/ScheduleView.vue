<script setup lang="ts">
import AppCalendar from '@/components/AppCalendar/AppCalendar.vue'
import { useAppointmentsStore } from '@/stores/appointments-store'
import AppButton from '@/components/AppButton/AppButton.vue'
import AppButtonGroup from '@/components/AppButton/AppButtonGroup.vue'

import { useUsersStore } from '@/stores/users-store'
import { storeToRefs } from 'pinia'
import moment, { type Moment } from 'moment'
import { computed, ref, watch } from 'vue'

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
