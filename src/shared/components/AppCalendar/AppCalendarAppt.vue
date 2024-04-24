<script setup lang="ts">
import { computed } from 'vue'
import {
    Appointment,
    AppointmentType,
    appointmentTypeColorMap,
} from '@/shared/types/appointment-models'
import { TimeFormat } from '@/shared/types/calendar-models'

const props = withDefaults(
    defineProps<{
        appointment: Appointment
        providerName: string
    }>(),
    {},
)

const bgColor = computed(() => {
    const color =
        appointmentTypeColorMap.get(props.appointment.type) ||
        appointmentTypeColorMap.get(AppointmentType.UNKNOWN)
    return `bg-${color}-100 text-${color}-700 border border-${color}-200`
})
</script>

<template>
    <li
        class="mx-1 p-2 rounded-xl text-body-sm relative overflow-auto flex flex-col"
        :class="`${bgColor} ${appointment.type}`"
    >
        <span>{{ appointment.start.format(TimeFormat.DISPLAY) }}</span>
        <span>{{ appointment.patientShortName }}</span>
        <span>More text</span>
        <span class="sr-only"
            >{{ appointment.type }} appointment with {{
        }}</span>
    </li>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
    @apply w-1.5 -ml-1.5;
}
/* Track */
::-webkit-scrollbar-track {
    background-color: inherit;
    @apply rounded-full;
}
/* Handle */
::-webkit-scrollbar-thumb {
    @apply rounded-full bg-sky-500 shadow-sm;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    @apply bg-sky-600;
}

.URGENT::-webkit-scrollbar-thumb {
    @apply bg-orange-300;
}
.URGENT::-webkit-scrollbar-thumb:hover {
    @apply bg-orange-400;
}
.FOLLOW_UP::-webkit-scrollbar-thumb {
    @apply bg-lime-300;
}
.FOLLOW_UP::-webkit-scrollbar-thumb:hover {
    @apply bg-lime-400;
}
.NEW_PATIENT::-webkit-scrollbar-thumb {
    @apply bg-violet-300;
}
.NEW_PATIENT::-webkit-scrollbar-thumb:hover {
    @apply bg-violet-400;
}
.OFFICE_VISIT::-webkit-scrollbar-thumb {
    @apply bg-pink-300;
}
.OFFICE_VISIT::-webkit-scrollbar-thumb:hover {
    @apply bg-pink-400;
}
</style>
