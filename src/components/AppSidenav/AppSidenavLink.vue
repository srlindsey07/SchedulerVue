<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(
    defineProps<{
        icon: string[]
        label: string
        active: boolean
    }>(),
    {},
)
</script>

<template>
    <button
        type="button"
        class="group flex flex-col items-center mb-5 outline-none disabled:opacity-50"
        :class="{ active: active }"
    >
        <div
            class="icon-container py-1.5 min-w-14 rounded-full text-center bg-primary-800 bg-transition group-focus:bg-primary-600"
        >
            <FontAwesomeIcon
                :icon="icon"
                class="h-6"
            />
        </div>

        <span class="text-body-sm font-medium mt-1">{{ props.label }}</span>
    </button>
</template>

<style scoped>
button:not(:disabled):hover .icon-container {
    @apply bg-primary-600;
}
.active .icon-container {
    @apply bg-primary-600;
}

.active:hover .icon-container,
.active:focus .icon-container {
    @apply bg-primary-500;
}
</style>
