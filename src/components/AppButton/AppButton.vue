<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

/**
 * Creates a button.
 *
 * @param label {string} label for inside the button or aria-title
 * @param [showLabel] {boolean} whether to show the label inside the button or not
 * @param [variant] {'default' | 'primary' | 'text' | 'outline'} required if not in button group
 * @param [icon] {string[]} FontAwesomeIcon
 *
 * @example
 * // label only
 * <AppButton label="Button 1" variant="default" />
 *
 * // will show the label and the icon
 * <AppButton label="Button 1" variant="default" :icon="['fas', 'calendar-days']" showLabel />
 *
 * // will show only the icon
 * <AppButton label="Button 1" variant="default" :icon="['fas', 'calendar-days']" showLabel="false" />
 */

const props = withDefaults(
    defineProps<{
        label: string
        showLabel?: boolean
        variant?: 'default' | 'primary' | 'text' | 'outline'
        icon?: string[]
    }>(),
    {
        showLabel: true,
    },
)
</script>

<template>
    <button
        type="button"
        class="flex justify-center items-center px font-medium outline-none border h-11 *:h-6 button"
        :class="variant ? `button-${variant}` : ''"
        :aria-title="!showLabel ? label : undefined"
    >
        <FontAwesomeIcon
            v-if="!!icon"
            :icon="icon"
        />
        {{ showLabel ? label : '' }}
    </button>
</template>

<style scoped></style>
