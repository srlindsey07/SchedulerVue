<script setup lang="ts">
import moment, { type Moment } from 'moment'
import { DateFormat, TimeFormat } from '@/models/calendar-models'
import type { User } from '@/models/user-models'
import { computed } from 'vue'
import type { Appointment } from '@/models/appointment-models'
import AppCalendarAppt from './AppCalendarAppt.vue'
import AppButtonGroup from '../AppButton/AppButtonGroup.vue'
import AppButton from '../AppButton/AppButton.vue'

const props = withDefaults(
    defineProps<{
        providers: User[]
        appointments: Appointment[]
        selectedDate: Moment
    }>(),
    {},
)
const emit = defineEmits(['update:selectedDate'])
const minuteRows = 1440

const dateSelected = computed(() => props.selectedDate)

const halfHourIntervals = computed(() => {
    let intervals: Moment[] = []
    let dayStart: Moment = moment().startOf('day')

    while (dayStart.isSameOrBefore(moment().endOf('day'))) {
        intervals.push(moment(dayStart))
        dayStart.add(30, 'minutes')
    }

    return intervals
})

function hourLabel(interval: Moment): string {
    return interval.minute() === 0
        ? interval.format(TimeFormat.SHORT_DISPLAY)
        : ''
}

function getProviderName(providerId: string): string {
    const provider = props.providers.find((p) => p.id === providerId)
    return provider?.name.fullName || ''
}

function getProviderColumnClass(providerId: string) {
    const index = props.providers.findIndex((p) => p.id === providerId)
    return `col-start-${index + 1}`
}

function getStartRow(apptTime: Moment): string {
    const dayStart = moment(apptTime).startOf('day')
    const minuteDiff = moment(apptTime).diff(
        moment(apptTime).startOf('day'),
        'minutes',
    )
    return `row-start-${minuteDiff}`
}

function getTimeSpan(apptStart: Moment, apptEnd: Moment): string {
    const minuteDiff = moment(apptEnd).diff(moment(apptStart), 'minutes')
    return `row-span-${minuteDiff}`
}

function handleDateChange(newDate: Moment): void {
    emit('update:selectedDate', newDate)
}
</script>

<template>
    <div className="flex flex-col relative border h-full overflow-hidden">
        <!-- calendar header -->
        <div
            className="text-lg font-bold bg-slate-100 px flex justify-between items-center basis-20 shrink-0 grow-0 rounded-t-xl"
        >
            <div>{{ dateSelected.format(DateFormat.DISPLAY) }}</div>

            <div>
                <AppButtonGroup variant="outline">
                    <AppButton
                        label="Previous"
                        :showLabel="false"
                        :icon="['fas', 'chevron-left']"
                        @click="
                            handleDateChange(
                                moment(selectedDate).subtract(1, 'days'),
                            )
                        "
                    />
                    <AppButton
                        label="Today"
                        @click="handleDateChange(moment())"
                    />
                    <AppButton
                        label="Next"
                        :showLabel="false"
                        :icon="['fas', 'chevron-right']"
                        @click="
                            handleDateChange(
                                moment(selectedDate).add(1, 'days'),
                            )
                        "
                    />
                </AppButtonGroup>
            </div>
        </div>

        <!-- calendar body -->
        <div class="flex h-full">
            <!-- calendar day-view area -->
            <!-- height is 100vh - header-height(3.5rem) - cal header-height(5rem) -->
            <div class="grow overflow-auto relative h-[calc(100vh-8.5rem)]">
                <div class="flex flex-col">
                    <!-- sticky day-view header -->
                    <div class="flex sticky top-0 z-10 bg-white shadow">
                        <!-- empty time gutter -->
                        <div class="w-12 shrink-0"></div>

                        <!-- provider column headers -->
                        <div
                            class="grow grid"
                            :class="`grid-cols-${providers.length}`"
                        >
                            <div
                                v-for="provider in providers"
                                :key="provider.id"
                                class="border-x p-1 text-center font-bold"
                            >
                                {{
                                    `${provider.name.first.charAt(0)}. ${provider.name.last}`
                                }}
                            </div>
                        </div>
                    </div>

                    <!-- day-view body -->
                    <div class="flex">
                        <!-- empty time gutter -->
                        <div className="w-12 shrink-0"></div>

                        <!-- time area -->
                        <div
                            class="grow grid grid-cols-1 grid-rows-1 h-[2500px] relative"
                        >
                            <!-- grid for half-hour rows -->
                            <div
                                class="grid-half-hour col-start-1 row-start-1 grid grid-cols-1"
                                :class="`grid-rows-[3rem repeat(${halfHourIntervals.length}, minmax(0, 1fr))]`"
                            >
                                <!-- extra space under sticky header -->
                                <div className="border-b bg-slate-50"></div>

                                <!-- interval rows and hour markers -->
                                <div
                                    v-for="(
                                        interval, index
                                    ) in halfHourIntervals"
                                    :key="index"
                                    class="border-b p-1"
                                >
                                    <!-- {{  interval }} -->
                                    <div
                                        class="w-10 text-xs font-bold text-right text-gray-500 -ml-12.5 -mt-3.5"
                                    >
                                        {{ hourLabel(interval) }}
                                    </div>
                                </div>
                            </div>

                            <!-- grid for provider columns -->
                            <div
                                class="grid col-start-1 row-start-1"
                                :class="`grid-cols-${providers.length}`"
                            >
                                <div
                                    v-for="(provider, index) in providers"
                                    :key="index"
                                    class="border p-1"
                                ></div>
                            </div>

                            <!-- grid for appointments -->
                            <!-- TODO: make sure appointments are sorted by date/time -->
                            <ol
                                class="grid col-start-1 row-start-1"
                                :class="`grid-cols-${providers.length} grid-rows-minutes`"
                            >
                                <li title="Current time"></li>
                                <AppCalendarAppt
                                    v-for="appointment in appointments"
                                    :key="appointment.id"
                                    :appointment="appointment"
                                    :providerName="
                                        getProviderName(appointment.providerId)
                                    "
                                    :class="`${getProviderColumnClass(appointment.providerId)} ${getStartRow(appointment.start)} ${getTimeSpan(appointment.start, appointment.end)}`"
                                />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <!-- side bar for small month-view calendar -->
        </div>

        <!-- legend -->
    </div>
</template>

<style scoped></style>
