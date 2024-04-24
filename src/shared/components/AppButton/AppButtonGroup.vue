<script setup lang="ts">
/**
 *  Creates a button group. Must provide a button as a child.
 *
 *  @param [variant]    'default' (default) | 'primary' | 'outline'
 *
 *  @example
 *  <AppButtonGroup>
 *      <AppButton label="Button 1" /> // Do not provide variant on buttons
 *      <AppButton label="Button 2" />
 *  </AppButtonGroup>
 */
const props = withDefaults(
    defineProps<{
        variant?: 'default' | 'primary' | 'outline'
    }>(),
    {
        variant: 'default',
    },
)
</script>

<template>
    <div
        class="button-group flex flex-row"
        :class="`button-group-${variant}`"
    >
        <slot></slot>
    </div>
</template>
