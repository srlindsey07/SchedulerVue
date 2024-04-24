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

const buttonVariant = computed(() => ({
    'pl-5': props.showLabel,
    'button-default': props.variant && props.variant === 'default',
    'button-primary': props.variant && props.variant === 'primary',
    'button-text': props.variant && props.variant === 'text',
    'button-outline': props.variant && props.variant === 'outline',
}))
</script>

<template>
    <button
        type="button"
        class="flex justify-center items-center px-6 font-medium outline-none border h-11 *:h-5 button"
        :class="buttonVariant"
        :aria-title="!showLabel ? label : undefined"
    >
        <FontAwesomeIcon
            v-if="!!icon"
            :icon="icon"
            :class="{ 'mr-2': showLabel }"
        />
        {{ showLabel ? label : '' }}
    </button>
</template>

<style scoped></style>
