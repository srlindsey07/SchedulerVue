<script setup lang="ts">
import { computed, type Ref } from 'vue'

const props = withDefaults(
    defineProps<{
        message: string | Ref<string>
        id: string
        isError?: boolean
    }>(),
    {
        isError: false,
    },
)

const roleType = computed(() => (props.isError ? 'alert' : undefined))
</script>

<template>
    <span
        :id="id"
        class="pl-3.5 text-body-sm"
        :class="{ 'text-red-600': isError }"
        :role="roleType"
        >{{ message }}</span
    >
</template>
