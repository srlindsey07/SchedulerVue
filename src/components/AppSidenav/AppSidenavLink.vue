<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(
    defineProps<{
        icon: string[]
        label: string
        link: string
        disabled?: boolean
    }>(),
    {
        disabled: false,
    },
)
</script>

<template>
    <RouterLink
        active-class="active"
        :to="$props.link"
        :disabled="!!disabled ? 'disabled' : undefined"
        class="group flex flex-col items-center mb-5 outline-none"
        :class="{ 'opacity-50 pointer-events-none': !!disabled }"
    >
        <div
            class="icon-container py-1.5 min-w-14 rounded-full text-center bg-primary-800 bg-transition group-hover:bg-primary-600 group-focus:bg-primary-600"
        >
            <FontAwesomeIcon
                :icon="icon"
                class="h-6"
            />
        </div>

        <span class="text-sm font-medium mt-1">{{ props.label }}</span>
    </RouterLink>
</template>

<style scoped>
.active .icon-container {
    @apply bg-primary-600;
}

.active:hover .icon-container,
.active:focus .icon-container {
    @apply bg-primary-500;
}
</style>
