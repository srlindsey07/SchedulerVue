<script setup lang="ts">
import type { Appointment } from '@/models/appointment-models'
import moment, { type Moment } from 'moment'
import { DateFormat, TimeFormat } from '@/models/calendar-models'

const props = withDefaults(
    defineProps<{
        appointment: Appointment
    }>(),
    {},
)
</script>

<template>
    <li class="bg-blue-100 m-1 p-1 rounded-xl text-sm relative flex flex-col">
        <!-- <span>{{ appointment.start.format(TimeFormat.DISPLAY) }}</span> -->
        <span>{{ appointment.patientShortName }}</span>
    </li>
</template>
