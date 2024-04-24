<script setup lang="ts">
const props = defineProps<{
    title: string
    subtitle?: string
}>()
</script>

<template>
    <div class="border-b border-slate-300 text-center pb mb">
        <h2>{{ title }}</h2>
        <span
            v-if="subtitle"
            class="font-medium"
            >{{ subtitle }}</span
        >
    </div>
</template>
