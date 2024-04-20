<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        open: boolean
        size?: 'sm' | 'md' | 'lg' | 'xl' // sm: 384px, md: 448px, lg: 512px, xl: 576px
        closeOnBackdropClick?: boolean
    }>(),
    {
        size: 'md',
        closeOnBackdropClick: true,
    },
)
const dialog = ref<HTMLDialogElement>()

const dialogSize = computed(() => `max-w-${props.size}`)

watch(
    () => props.open,
    (isOpen) => {
        isOpen ? dialog.value?.showModal() : dialog.value?.close()
    },
)

// TODO: Add dialog close when backdrop is clicked
</script>

<template>
    <dialog
        ref="dialog"
        class="rounded-xl w-full max-w-xl backdrop:bg-smoke-300 backdrop:backdrop-blur-xs"
        :class="dialogSize"
    >
        <div class="dialog-container p flex flex-col">
            <slot></slot>
        </div>
    </dialog>
</template>
